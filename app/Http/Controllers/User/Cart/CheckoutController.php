<?php

namespace App\Http\Controllers\User\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\StatesCitiesTrait;
use App\Jobs\TriggerOrderPaidEventJob;
use App\Models\Address;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Shipping;
use App\Models\User;
use App\Rules\PhoneNumberValidation;
use Billplz\Laravel\Billplz;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    use StatesCitiesTrait;

    public function index()
    {
        $cartIds = Cart::where('user_id', Auth::user()->id)
            ->where('is_checkout', true)
            ->pluck('id');

        $products = [];
        foreach ($cartIds as $cartId) {
            $productInCart = Cart::select([
                'id',
                'product_id',
                'variant_name',
                'quantity',
                'price'
            ])
                ->where('user_id', Auth::user()->id)
                ->where('id', $cartId)
                ->first();

            $product = $productInCart->product()->select([
                'id',
                'name',
            ])->where('id', $productInCart->product_id)
                ->first();

            $products[] = [
                'id' => $productInCart->id,
                'name' => $product->name,
                'variantName' => $productInCart->variant_name,
                'imageUrl' => count($product->images) > 0 ?
                    $product->images()->select([
                        'id',
                        'product_id',
                        'url',
                    ])->first() : null,
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
        $address = Address::where('user_id', auth()->user()->id)
            ->where('full_name', $request->full_name)
            ->where('phone_number', $request->phone_number)
            ->where('state', $request->state)
            ->where('city', $request->city)
            ->where('postal_code', $request->postal_code)
            ->where('street_name', $request->street_name)
            ->first();

        $billplzBill = Billplz::bill();

        $response = $billplzBill->create(
            'bgs0cicq',
            $request->email,
            $request->phone_number,
            $request->full_name,
            500,
            'https://arm-commerce.amrilazim.com/products',
            'make a payment',
            [
                'redirect_url' => 'https://arm-commerce.amrilazim.com/user/checkout/response'
            ]
        );

        // insert data into order table
        $cartIds = $request->cartIds;
        foreach ($cartIds as $id) {
            Order::create([
                'user_id' => Auth::user()->id,
                'cart_id' => $id,
                'address_id' => $address->id,
                'bill_id' => $response->toArray()['id'],
                'bill_url' => $response->toArray()['url'],
                'contact_email' => $request->email,
                'status' => 'due'
            ]);

            // perform soft delete on cart item with given product_id
            Cart::find($id)->delete();
        }

        return $response->toArray()['url'];
    }

    public function response(Request $request)
    {
        if ($request->all() == []) {
            return redirect('/products');
        }

        if ($request->billplz['paid'] == 'false') {
            $orders = Order::where('bill_id', $request->billplz['id'])->get();

            foreach ($orders as $order) {
                $order->status = 'fail';

                $order->save();
            }

            return redirect()->route('products.index')->with('success', 'payment failed');
        }

        $orders = Order::where('bill_id', $request->billplz['id'])->get();

        foreach ($orders as $order) {
            if ($request->billplz['paid'] == 'true') {
                $order->status = 'paid';

                $order->save();

                Shipping::create([
                    'order_id' => $order->id,
                    'user_id' => auth()->user()->id,
                    'status' => 'pending'
                ]);
            }
        }

        TriggerOrderPaidEventJob::dispatch();

        return redirect()->route('products.index')->with('success', 'payment success');
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
