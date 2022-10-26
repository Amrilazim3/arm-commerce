<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index(Category $category)
    {
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
            }])->paginate(20);

        return Inertia::render('Products/Categories/Index', [
            'productsData' => $productsData,
            'category' => $category->name
        ]);
    }
}
