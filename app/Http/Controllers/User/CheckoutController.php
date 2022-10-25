<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\StatesCitiesTrait;
use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\User;
use Billplz\Client;
use Billplz\Laravel\Billplz;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class CheckoutController extends Controller
{
    use StatesCitiesTrait;

    public function index()
    {
        $productIds = Cart::where('user_id', auth()->user()->id)
            ->where('is_checkout', true)
            ->pluck('id');

        $products = [];
        foreach ($productIds as $productId) {
            $productInCart = Cart::select([
                'id',
                'product_id',
                'quantity',
                'price'
            ])
                ->where('user_id', auth()->user()->id)
                ->where('id', $productId)
                ->first();

            $product = Product::select([
                'id',
                'name',
            ])->where('id', $productInCart->product_id)
                ->first();

            $image = ProductImage::where('product_id', $productInCart->product_id)->first();

            $products[] = [
                'id' => $productInCart->id,
                'name' => $product->name,
                'imageUrl' => $image ? $image->url : null,
                'quantity' => $productInCart->quantity,
                'price' => $productInCart->price
            ];
        }

        $statesCitiesRes = $this->getStatesCitiesData();

        return Inertia::render('User/Checkout', [
            'products' => $products,
            'addresses' => User::where('id', Auth::id())->first()->addresses,
            'states' => $statesCitiesRes['states'],
            'statesCities' => $statesCitiesRes['statesCities']
        ]);
    }

    public function confirmOrder(Request $request)
    {
        $billplzBill = Billplz::bill();

        $response = $billplzBill->create(
            'bgs0cicq',
            'a.azim0711@gmail.com',
            '60175221202',
            'Encik akmal',
            1000,
            'https://arm-commerce.com/products',
            'testing billplz api',
            [
                'redirect_url' => 'https://arm-commerce.com/products?billplz_payment_information=success'
            ]
        );

        return $response->toArray()['url'];
    }
}
