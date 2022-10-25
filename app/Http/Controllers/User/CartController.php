<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $carts = Cart::where('user_id', auth()->user()->id)->get();

        $cartsData = [];
        foreach ($carts as $key => &$cart) {
            $cartsData[$key]['id'] = $cart->id;
            $cartsData[$key]['userId'] = $cart->user_id;
            $cartsData[$key]['productId'] = $cart->product_id;

            $product = Product::where('id', $cart->product_id)->first();
            $cartsData[$key]['name'] = $product->name;
            $cartsData[$key]['slug'] = $product->slug;

            $cartsData[$key]['variantName'] = $cart->variant_name;
            $cartsData[$key]['quantity'] = $cart->quantity;
            $cartsData[$key]['price'] = $cart->price;
            $cartsData[$key]['isCheckout'] = $cart->is_checkout ? true : false;

            $image = ProductImage::where('product_id', $cart->product_id)->first();
            $cartsData[$key]['imageUrl'] = $image ? $image->url : null;
        }

        return $cartsData;
    }

    public function destroy(Cart $cart)
    {
        $cart->delete();

        return redirect()->back();
    }

    public function checkout(Request $request)
    {
        $productIds = $request->productIds;

        foreach ($productIds as $productId) {
            $singleProduct = Cart::where('id', $productId)
                ->where('user_id', auth()->user()->id)
                ->first();

            $singleProduct->is_checkout = true;

            $singleProduct->save();
        }

        return true;
    }
}
