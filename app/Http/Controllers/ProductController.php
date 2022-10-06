<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $productsData = Product::select([
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
            ->paginate(20);

        return Inertia::render('Products/Index', [
            'productsData' => $productsData
        ]);
    }
}
