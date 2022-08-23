<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
        return Inertia::render('Admin/Products/Create', [
            'variants' => Variant::select('id', 'name')->take(3)->get()
        ]);
    }

    public function store(Request $request)
    {
        if ($request->allFiles()) {
            return $request->file('image');
        }

        return redirect()->back();
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
