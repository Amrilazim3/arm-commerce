<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
        if (request('search')) {
            $productsData = Product::select([
                'id',
                'name',
                'slug',
                'description',
                'stock',
                'price'
            ])
                ->filter(
                    request(['search'])
                )
                ->where('category_id', $category->id)
                ->with(['images' => function ($query) {
                    return $query->select(['id', 'product_id', 'url']);
                }])
                ->latest()
                ->paginate(20);
        } else {
            $productsData = $category->products()->select([
                'id',
                'name',
                'slug',
                'description',
                'stock',
                'price'
            ])
                ->with(['images' => function ($query) {
                    return $query->select(['id', 'product_id', 'url']);
                }])
                ->latest()
                ->paginate(20);
        }

        $categories = Category::all(['id', 'name', 'slug']);

        return Inertia::render('Products/Categories/Index', [
            'productsData' => $productsData,
            'category' => $category->name,
            'requests' => request(['search']),
            'categories' => $categories,
            'baseUrl' => config('app.url')
        ]);
    }
}
