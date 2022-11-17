<?php

namespace App\Http\Controllers\User\Purchase;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShippingController extends Controller
{
    public function index()
    {
        $shippingsData = Shipping::select([
            'id',
            'user_id',
            'order_id',
            'status',
            'created_at'
        ])
            ->where('user_id', auth()->user()->id)
            ->where('status', 'pending')
            ->with(['order' => function ($item) {
                return $item->select([
                    'id',
                    'cart_id',
                    'bill_id',
                    'address_id',
                    'contact_email'
                ])
                    ->with(['address' => function ($item) {
                        return $item->select([
                            'id',
                            'full_name',
                            'phone_number',
                            'state',
                            'city',
                            'postal_code',
                            'street_name'
                        ]);
                    }])
                    ->with(['cart' => function ($item) {
                        return $item->select([
                            'id',
                            'product_id',
                            'variant_name',
                            'quantity',
                            'price'
                        ])
                            ->with(['product' => function ($item) {
                                return $item->select([
                                    'id',
                                    'name',
                                    'slug'
                                ])
                                    ->with(['images' => function ($item) {
                                        return $item->select([
                                            'id',
                                            'product_id',
                                            'url'
                                        ])->first();
                                    }])
                                    ->get();
                            }])
                            ->withTrashed();
                    }]);
            }])
            ->get();

        return Inertia::render('User/Purchase/ToShip', [
            'shippingsData' => $shippingsData
        ]);
    }

    public function cancelShipping(Request $request)
    {
        foreach ($request->orderIds as $id) {
            $ship = Shipping::where('order_id', $id)->first();

            $ship->status = 'cancelled';

            $ship->save();
        }

        return redirect()->back();
    }

    public function receive()
    {
        $shippingsData = Shipping::select([
            'id',
            'user_id',
            'order_id',
            'status',
            'created_at'
        ])
            ->where('user_id', auth()->user()->id)
            ->where('status', 'shipped')
            ->with(['order' => function ($item) {
                return $item->select([
                    'id',
                    'cart_id',
                    'bill_id',
                    'address_id',
                    'contact_email'
                ])
                    ->with(['address' => function ($item) {
                        return $item->select([
                            'id',
                            'full_name',
                            'phone_number',
                            'state',
                            'city',
                            'postal_code',
                            'street_name'
                        ]);
                    }])
                    ->with(['cart' => function ($item) {
                        return $item->select([
                            'id',
                            'product_id',
                            'variant_name',
                            'quantity',
                            'price'
                        ])
                            ->with(['product' => function ($item) {
                                return $item->select([
                                    'id',
                                    'name',
                                    'slug'
                                ])
                                    ->with(['images' => function ($item) {
                                        return $item->select([
                                            'id',
                                            'product_id',
                                            'url'
                                        ])->first();
                                    }])
                                    ->get();
                            }])
                            ->withTrashed();
                    }]);
            }])
            ->get();

        return Inertia::render('User/Purchase/ToReceive', [
            'shippingsData' => $shippingsData
        ]);
    }

    public function productReceive(Request $request)
    {
        foreach ($request->orderIds as $id) {
            $ship = Shipping::where('order_id', $id)->first();

            $ship->status = 'completed';

            $ship->save();
        }

        return redirect()->back();
    }

    public function completed()
    {
        $shippingsData = Shipping::select([
            'id',
            'user_id',
            'order_id',
            'status',
            'created_at'
        ])
            ->where('user_id', auth()->user()->id)
            ->where('status', 'completed')
            ->with(['order' => function ($item) {
                return $item->select([
                    'id',
                    'cart_id',
                    'bill_id',
                    'address_id',
                    'contact_email'
                ])
                    ->with(['address' => function ($item) {
                        return $item->select([
                            'id',
                            'full_name',
                            'phone_number',
                            'state',
                            'city',
                            'postal_code',
                            'street_name'
                        ]);
                    }])
                    ->with(['cart' => function ($item) {
                        return $item->select([
                            'id',
                            'product_id',
                            'variant_name',
                            'quantity',
                            'price'
                        ])
                            ->with(['product' => function ($item) {
                                return $item->select([
                                    'id',
                                    'name',
                                    'slug'
                                ])
                                    ->with(['images' => function ($item) {
                                        return $item->select([
                                            'id',
                                            'product_id',
                                            'url'
                                        ])->first();
                                    }])
                                    ->get();
                            }])
                            ->withTrashed();
                    }]);
            }])
            ->get();

        return Inertia::render('User/Purchase/Completed', [
            'shippingsData' => $shippingsData
        ]);
    }
}
