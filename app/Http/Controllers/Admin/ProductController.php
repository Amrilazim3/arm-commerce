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

    const IMAGE_FORMAT = [
        '.apng',
        '.avif',
        '.gif',
        '.jpg',
        '.jpeg',
        '.jfif',
        '.pjpeg',
        '.pjp',
        '.png',
        '.svg',
        '.webp',
    ];
    const VIDEO_FORMAT = [
        '.mp4',
        '.mov',
        '.wmv',
        '.avi',
        '.avchd',
        '.flv',
        '.f4v',
        '.swf',
        '.mkv',
        '.webm',
        '.html5',
        '.mepg-2',
    ];


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
        $categories = $this->getDefaultCategories();

        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $this->validateProduct($request);

        $category = $this->createOrGetCategory($request->category);

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

            $overallStock = 0;
            for ($j = 0; $j < count($request->variants); $j++) {
                $singleVariant = $request->variants[$j];

                $overallStock += $singleVariant['stock'];

                if ($singleVariant['filePath']) {
                    $variantImage = $this->changeMediaFileLocation(
                        $singleVariant['filePath'],
                        $product->id
                    );
                }

                $productVariant = ProductVariant::create([
                    'product_id' => $product->id,
                    'name' => ucwords($singleVariant['name']),
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

            $product->stock = $overallStock;
            $product->save();
        }

        return redirect('admin/products');
    }

    public function edit(Product $product)
    {
        $ProductOptionsVariants = $this->getProductOptionsVariants($product);
        $optionsValues = $ProductOptionsVariants["optionsValues"];
        $variants = $ProductOptionsVariants["variants"];
        $previewVariantsMediaUploadedData = $ProductOptionsVariants["previewVariantsMediaUploadedData"];

        $media = [];
        $previewProductMediaUploadedData = [];
        $product->images()->each(function ($imageItem)
        use (&$media, &$previewProductMediaUploadedData, &$previewVariantsMediaUploadedData) {
            if (in_array($imageItem->url, $previewVariantsMediaUploadedData)) {
                return;
            }

            foreach (self::IMAGE_FORMAT as $format) {
                if (preg_match("/$format/i", $imageItem)) {
                    $previewProductMediaUploadedData[] = [
                        $imageItem->url,
                        'image'
                    ];
                }
            }

            foreach (self::VIDEO_FORMAT as $format) {
                if (preg_match("/$format/i", $imageItem)) {
                    $previewProductMediaUploadedData[] = [
                        $imageItem->url,
                        'video'
                    ];
                }
            }

            $imagePath = str_replace(asset('storage') . '/', '', $imageItem->url);
            array_push($media, $imagePath);
        });

        $categories = $this->getDefaultCategories();

        return Inertia::render('Admin/Products/Edit', [
            'productData' => [
                'id' => $product->id,
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'category' => $product->category->name,
                'media' => $media,
                'stock' => strval($product->stock),
                'price' => strval($product->price),
                'options' => $optionsValues,
                'variants' => $variants,
                'productMediaRemoved' => [],
                'variantsMediaRemoved' => [],
            ],
            'previewProductMediaUploadedData' => $previewProductMediaUploadedData,
            'previewVariantsMediaUploadedData' => $previewVariantsMediaUploadedData,
            'categories' => $categories,
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $this->validateProduct($request);

        $category = $this->createOrGetCategory($request->category);

        $product->update([
            'category_id' => $category->id,
            'name' => $request->name,
            'description' => $request->description,
            'slug' => Str::slug($request->name) . '-' . Str::random(10),
            'stock' => $request->stock,
            'price' => $request->price,
        ]);

        $product->save();

        if (count($request->productMediaRemoved) > 0) {
            foreach ($request->productMediaRemoved as $singleMediaRemoved) {
                ProductImage::where('url', $singleMediaRemoved)->delete();

                $filePath = str_replace(asset('storage') . '/', '', $singleMediaRemoved);
                Storage::disk('public')->delete($filePath);
            }
        }

        if (count($request->media) > 0) {
            foreach ($request->media as $tempPath) {
                if (!preg_match("/product/i", $tempPath)) {
                    $this->changeMediaFileLocation($tempPath, $product->id);
                }
            }
        }

        $ProductOptionsVariants = $this->getProductOptionsVariants($product);
        $variants = $ProductOptionsVariants['variants'];

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

            $currentProductvariantsName = [];
            for ($i = 0; $i < count($variants); $i++) {
                $currentProductvariantsName[] = $variants[$i]['name'];
            }

            $overallStock = 0;
            for ($j = 0; $j < count($request->variants); $j++) {
                $singleVariant = $request->variants[$j];

                $overallStock += $singleVariant['stock'];

                if (!$singleVariant['isDelete']) {
                    if (in_array($singleVariant['name'], $currentProductvariantsName)) {
                        $productVariant = ProductVariant::where('product_id', $product->id)
                            ->where('name', $singleVariant['name'])->first();

                        if ($productVariant) {
                            if ($singleVariant['filePath']) {
                                if (preg_match("/temp/i", $singleVariant['filePath'])) {
                                    $variantImage = $this->changeMediaFileLocation(
                                        $singleVariant['filePath'],
                                        $product->id
                                    );
                                }
                            }

                            // update the model
                            $productVariant->update([
                                'product_id' => $product->id,
                                'name' => ucwords($singleVariant['name']),
                                'image_url' => $singleVariant['filePath'] == null ?
                                    null : (preg_match("/product/", $singleVariant['filePath']) == true ?
                                        $productVariant->image_url :
                                        $variantImage->url
                                    ),
                                'stock' => $singleVariant['stock'],
                                'price' => $singleVariant['price']
                            ]);
                        }
    
                        unset($currentProductvariantsName[$j]);
                    } else {
                        // create new product variant
                        if ($singleVariant['filePath']) {
                            $variantImage = $this->changeMediaFileLocation(
                                $singleVariant['filePath'],
                                $product->id
                            );
                        }
    
                        $productVariant = ProductVariant::create([
                            'product_id' => $product->id,
                            'name' => ucwords($singleVariant['name']),
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
            }

            $product->stock = $overallStock;
            $product->save();

            if (count($currentProductvariantsName) > 0) {
                foreach ($currentProductvariantsName as $variantName) {
                    $productVariant = ProductVariant::where('product_id', $product->id)
                        ->where('name', $variantName)->first();

                    $variantNames = explode(' / ', $variantName);
                    for ($i = 0; $i < count($variantNames); $i++) {
                        ProductDetail::where('product_variant_id', $productVariant->id)
                            ->first()
                            ->delete();
                    }

                    $productVariant->delete();
                }
            }
        }

        if (count($request->variants) == 0 && count($variants) > 0) {
            foreach ($variants as $variant) {
                $productVariant = ProductVariant::where('product_id', $product->id)
                    ->where('name', $variantName)->first();

                $variantNames = explode(' / ', $variantName);
                for ($i = 0; $i < count($variantNames); $i++) {
                    ProductDetail::where('product_variant_id', $productVariant->id)
                        ->first()
                        ->delete();
                }

                $productVariant->delete();
            }

            $product->stock = $request->stock;
            $product->save();
        }

        if (count($request->variantsMediaRemoved) > 0) {
            foreach ($request->variantsMediaRemoved as $variantMediaRemoved) {
                ProductImage::where('product_id', $product->id)
                    ->where('url', $variantMediaRemoved)->delete();

                $filePath = str_replace(asset('storage') . '/', '', $variantMediaRemoved);
                Storage::disk('public')->delete($filePath);
            }
        }

        Cache::forget($product->slug);

        return redirect('admin/products');
    }

    public function destroy(Product $product)
    {
        $product->images()->each(function ($image) {
            $imagePath = str_replace(asset('storage') . '/', '', $image->url);
            Storage::disk('public')->delete($imagePath);
        });

        $product->delete();

        return redirect()->back();
    }

    protected function getDefaultCategories()
    {
        return Cache::remember('categories', now()->addMinutes(7200), function () {
            return Category::select('id', 'name')->take(5)->orderBy('id', 'asc')->get();
        });
    }

    protected function validateProduct($request)
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
    }

    protected function createOrGetCategory($category)
    {
        return Category::firstOrCreate([
            'name' => ucwords($category),
            'slug' => Str::slug($category)
        ]);
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

    protected function getProductOptionsVariants($product)
    {
        $optionsValues = [];
        $variants = [];
        $previewVariantsMediaUploadedData = [];
        $product->productVariants()->each(
            function ($productVariantItem) use (&$variants, &$optionsValues, &$previewVariantsMediaUploadedData) {
                $variants[] = [
                    'name' => $productVariantItem->name,
                    'filePath' => str_replace(asset('storage') . '/', '', $productVariantItem->image_url),
                    'stock' => $productVariantItem->stock,
                    'price' => $productVariantItem->price,
                    'isDelete' => false,
                ];
                $previewVariantsMediaUploadedData[] = $productVariantItem->image_url;

                $optionsLimit = count($productVariantItem->productDetails);
                $productVariantItem->productDetails()->each(
                    function ($productDetailItem) use (&$optionsValues, $optionsLimit) {
                        $productOptionValue = $productDetailItem->variantValue->value;
                        $productOptionName = $productDetailItem->variantValue->variant->name;

                        if (empty($optionsValues)) {
                            $optionsValues[] = [
                                'name' => $productOptionName,
                                'values' => [$productOptionValue],
                                'isSaved' => true,
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
                                        'values' => [$productOptionValue],
                                        'isSaved' => true,
                                    ];
                                    return;
                                }
                            }
                        }
                    }
                );
            }
        );

        for ($i = 0; $i < count($optionsValues); $i++) {
            array_push($optionsValues[$i]["values"], "");
        }

        return [
            'optionsValues' => $optionsValues,
            'variants' => $variants,
            'previewVariantsMediaUploadedData' => $previewVariantsMediaUploadedData
        ];
    }
}
