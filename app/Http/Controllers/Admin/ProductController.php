<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Products/Index', [
            'products' => Product::paginate(20)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Products/Create');
    }

    public function store(Request $request)
    {
        dd('store  method');
    }

    public function show(Product $product)
    {
        return Inertia::render('Admin/Products/Show');
    }

    public function edit(Product $product)
    {
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
}
