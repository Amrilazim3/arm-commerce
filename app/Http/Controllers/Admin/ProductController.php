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
        dd('index method');
    }

    public function create()
    {
        dd('create method');
    }

    public function store(Request $request)
    {
        dd('store  method');
    }

    public function show(Product $product)
    {
        dd('show method');
    }

    public function edit(Product $product)
    {
        dd('edit method');
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
