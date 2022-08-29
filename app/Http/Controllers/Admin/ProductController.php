<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Variant;
use App\Rules\MediaValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
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
        $variants = Cache::remember('variants', now()->addMinutes(7200), function () {
            return Variant::select('id', 'name')->take(3)->get();
        });

        $categories = Cache::remember('categories', now()->addMinutes(7200), function () {
            return Category::select('id', 'name')->take(5)->orderBy('id', 'asc')->get();
        });      

        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
            'variants' => $variants
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
            if (Storage::disk('public')->exists($tempPath)) {
                $mediaAbsolutePath = str_replace('temp/', '', $tempPath);
                Storage::disk('public')->move($tempPath, 'product/' . $mediaAbsolutePath);

                ProductImage::create([
                    'product_id' => $product->id,
                    'url' => asset('storage/product/' . $mediaAbsolutePath)
                ]);
            }
        }

        return redirect('admin/products');
    }

    public function show(Product $product)
    {
        return Inertia::render('Admin/Products/Show', [
            'product' => $product->only(['name', 'description', 'slug', 'stock', 'price'])
        ]);
    }

    public function edit(Product $product)
    {
        dd('edit product');

        return Inertia::render('Admin/Products/Edit');
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
}
