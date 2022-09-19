<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductDetail;
use App\Models\ProductImage;
use App\Models\ProductVariant;
use App\Models\Variant;
use App\Models\VariantValue;
use App\Rules\MediaValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::select([
            'id',
            'name',
            'slug',
            'description',
            'category_id',
            'stock'
        ])
            ->with(['category' => function ($query) {
                return $query->select(['id', 'name', 'slug']);
            }])
            ->filter(
                request(['created_at', 'stock', 'search'])
            )
            ->paginate(20);

        $products->withQueryString();

        return Inertia::render('Admin/Products/Index', [
            'products' => $products,
            'requests' => request(['created_at', 'stock', 'search'])
        ]);
    }

    public function create()
    {
        $categories = Cache::remember('categories', now()->addMinutes(7200), function () {
            return Category::select('id', 'name')->take(5)->orderBy('id', 'asc')->get();
        });

        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:250'],
            'description' => ['required', 'min:100'],
            'category' => ['required'],
            'stock' => ['required'],
            'price' => ['required'],
            'media' => ['array', new MediaValidation()],
            'media.*' => ['string']
        ]);

        $category = Category::firstOrCreate([
            'name' => ucwords($request->category),
            'slug' => Str::slug($request->category)
        ]);

        $product = Product::create([
            'user_id' => $request->user()->id,
            'category_id' => $category->id,
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name) . '-' . Str::random(10),
            'stock' => $request->stock,
            'price' => $request->price,
        ]);

        foreach ($request->media as $tempPath) {
            $this->changeMediaFileLocation($tempPath, $product->id);
        }

        // insert data into table 'variants', 'variant_values', 'product_variants', 'product_details' 
        if (count($request->variants) > 0) {
            $variantIds = [];
            for ($x = 0; $x < count($request->options); $x++) {
                $option = $request->options[$x];
                $optionName = ucwords(strtolower($option['name']));


                $variant = Variant::firstOrCreate([
                    'name' => $optionName
                ]);
                $variantIds[] = $variant->id;

                foreach ($option['values'] as $value) {
                    if ($value !== null) {
                        $VariantValuechecker = VariantValue::where('value', $value)
                            ->where('variant_id', $variant->id)
                            ->first();

                        if ($VariantValuechecker == null) {
                            VariantValue::create([
                                'variant_id' => $variant->id,
                                'value' => ucwords(strtolower($value))
                            ]);
                        }
                    }
                }
            }

            for ($j = 0; $j < count($request->variants); $j++) {
                $singleVariant = $request->variants[$j];

                if ($singleVariant['filePath']) {
                    $variantImage = $this->changeMediaFileLocation(
                        $singleVariant['filePath'],
                        $product->id
                    );
                }

                $productVariant = ProductVariant::create([
                    'product_id' => $product->id,
                    'name' => strtolower($singleVariant['name']),
                    'image_url' => $singleVariant['filePath'] == null ?
                        null :
                        $variantImage->url,
                    'stock' => $singleVariant['stock'],
                    'price' => $singleVariant['price']
                ]);

                $variantOptions = explode(
                    ' / ',
                    strtolower($singleVariant['name'])
                );

                foreach ($variantOptions as $key => $option) {
                    $variantValueRes = VariantValue::where('value', $option)
                        ->where('variant_id', $variantIds[$key])
                        ->first();

                    ProductDetail::create([
                        'product_variant_id' => $productVariant->id,
                        'variant_value_id' => $variantValueRes->id,
                    ]);
                }
            }
        }

        return redirect('admin/products');
    }

    public function edit(Product $product)
    {
        $optionsValues = [];
        $variants = [];
        $product->productVariants()->each(
            function ($productVariantItem) use (&$variants, &$optionsValues) {
                $variants[] = [
                    'name' => $productVariantItem->name,
                    'imageUrl' => $productVariantItem->image_url,
                    'stock' => $productVariantItem->stock,
                    'price' => $productVariantItem->price
                ];
                $optionsLimit = count($productVariantItem->productDetails);

                $productVariantItem->productDetails()->each(
                    function ($productDetailItem) use (&$optionsValues, $optionsLimit) {
                        $productOptionValue = $productDetailItem->variantValue->value;
                        $productOptionName = $productDetailItem->variantValue->variant->name;

                        if (empty($optionsValues)) {
                            $optionsValues[] = [
                                'name' => $productOptionName,
                                'values' => [$productOptionValue]
                            ];
                            return;
                        }

                        for ($i = 0; $i < $optionsLimit; $i++) {
                            if ($optionsValues[$i]['name'] === $productOptionName) {
                                if (!in_array($productOptionValue, $optionsValues[$i]['values'])) {
                                    array_push($optionsValues[$i]['values'], $productOptionValue);
                                    return;
                                }
                                return;
                            }

                            if ($optionsValues[$i]['name'] !== $productOptionName) {
                                if (!array_key_exists($i + 1, $optionsValues) && $i + 1 < $optionsLimit) {
                                    $optionsValues[] = [
                                        'name' => $productOptionName,
                                        'values' => [$productOptionValue]
                                    ];
                                    return;
                                }
                            }
                        }
                    }
                );
            }
        );

        $media = [];
        $product->images()->each(function ($imageItem) use (&$media) {
            array_push($media, $imageItem->url);
        });

        return Inertia::render('Admin/Products/Edit', [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'category' => $product->category->name,
                'media' => $media,
                'options' => $optionsValues,
                'variants' => $variants
            ]
        ]);
    }

    public function update(Request $request, Product $product)
    {
        dd('update method');
    }

    public function destroy(Product $product)
    {
        dd('destroy method');
    }

    protected function handleMediaUpload(Request $request)
    {
        if ($request->hasFile('media')) {
            $request->validate([
                'media.*' => ['file', 'max:5000']
            ]);

            $mediaLength = count($request->file('media'));
            $mediaResponse = [];
            $i = 0;
            for ($mediaLength; $i < $mediaLength; $i++) {
                $path = $request->file('media')[$i]->store('temp', 'public');
                $mediaResponse[] = $path;
            }

            return redirect()->back()->with('success', $mediaResponse);
        }

        if ($request->hasFile('variant')) {
            $path = $request->file('variant')->store('temp', 'public');
            return redirect()->back()->with('success', $path);
        }

        return redirect()->back()->withErrors('something went wrong');
    }

    protected function handleMediaRemove(Request $request)
    {
        if (Storage::disk('public')->exists($request->filePath)) {
            Storage::disk('public')->delete($request->filePath);
            return redirect()->back();
        }

        return redirect()->back()->withErrors('failed to removed.');
    }

    protected function changeMediaFileLocation($tempPath, $productId)
    {
        if (Storage::disk('public')->exists($tempPath)) {
            $mediaAbsolutePath = str_replace('temp/', '', $tempPath);
            Storage::disk('public')->move($tempPath, 'product/' . $mediaAbsolutePath);

            return ProductImage::create([
                'product_id' => $productId,
                'url' => asset('storage/product/' . $mediaAbsolutePath)
            ]);
        }
    }
}
