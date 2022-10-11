<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
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

    public function show(Product $product)
    {
        $product = Cache::remember($product->slug, now()->addMinutes(7200), function () use ($product) {
            return $product;
        });

        $imagesObj = [];
        foreach ($product->images as &$image) {
            $imagesObj[] = $image->url;
        }

        $optionsValues = [];
        $variants = [];
        $product->productVariants()->each(
            function ($productVariantItem) use (&$variants, &$optionsValues) {
                $variants[] = [
                    'name' => $productVariantItem->name,
                    'image_url' => $productVariantItem->image_url,
                    'stock' => $productVariantItem->stock,
                    'price' => $productVariantItem->price,
                ];

                $optionsLimit = count($productVariantItem->productDetails);

                $productVariantItem->productDetails()->each(
                    function ($productDetailItem) use (&$optionsValues, $optionsLimit) {
                        $productOptionValue = $productDetailItem->variantValue->value;
                        $productOptionName = $productDetailItem->variantValue->variant->name;

                        if (empty($optionsValues)) {
                            $optionsValues[] = [
                                'name' => $productOptionName,
                                'values' => [$productOptionValue],
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
                                    ];
                                    return;
                                }
                            }
                        }
                    }
                );
            }
        );

        return Inertia::render('Products/Show', [
            'productData' => [
                'name' => $product->name,
                'slug' => $product->slug,
                'description' => $product->description,
                'stock' => $product->stock,
                'price' => $product->price,
                'category' => [
                    'id' => $product->category->id,
                    'name' => $product->category->name,
                    'slug' => $product->category->slug
                ],
                'images' => $imagesObj,
                'options' => $optionsValues,
                'variants' => $variants
            ]
        ]);
    }
}
