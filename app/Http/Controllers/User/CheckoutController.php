<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\StatesCitiesTrait;
use App\Models\Address;
use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\User;
use App\Rules\PhoneNumberValidation;
use Billplz\Laravel\Billplz;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    use StatesCitiesTrait;

    public function index()
    {
        $productIds = Cart::where('user_id', Auth::user()->id)
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
                ->where('user_id', Auth::user()->id)
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
        // Cart::where('user_id', Auth::user()->id)->where('is_checkout', true);
        // insert data into order table
            /**
             * 1. id
             * 2. bill_id
             * 3. cart_id
             * 4. status (due, completed)
             */
        // perform soft delete on cart item with 'is_checkout' = true

        $billplzBill = Billplz::bill();

        $response = $billplzBill->create(
            'bgs0cicq',
            $request->email,
            $request->phone_number,
            $request->full_name,
            500,
            'https://arm-commerce.com/products',
            'make a product purchase',
            [
                'redirect_url' => 'https://arm-commerce.com/products?billplz_payment_information=success'
            ]
        );

        return $response->toArray()['url'];
    }

    public function validateCheckoutInformation(Request $request)
    {
        if ($request->isNewAddress) {
            $request->validate([
                'email' => ['required', 'email'],
                'phone_number' => [
                    'required',
                    new PhoneNumberValidation,
                    'integer'
                ],
                'full_name' => ['required'],
                'state' => ['required'],
                'city' => ['required'],
                'postal_code' => [
                    'required',
                    'integer',
                    'digits:5',
                    'postal_code:MY'
                ],
                'street_name' => ['required'],
            ]);

            Address::create([
                'user_id' => Auth::user()->id,
                'full_name' => $request->full_name,
                'phone_number' => $request->phone_number,
                'state' => $request->state,
                'city' => $request->city,
                'postal_code' => $request->postal_code,
                'street_name' => $request->street_name,
                'is_default' => false
            ]);
        } else {
            $request->validate([
                'email' => ['required', 'email']
            ]);
        }

        return redirect()->back();
    }
}
