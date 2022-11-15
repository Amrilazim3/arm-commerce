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
                                ])->get();
                            }])
                            ->withTrashed();
                    }]);
            }])
            ->get();

        return Inertia::render('User/Purchase/ToShip', [
            'shippingsData' => $shippingsData
        ]);
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
                                ])->get();
                            }])
                            ->withTrashed();
                    }]);
            }])
            ->get();
    
            return Inertia::render('User/Purchase/ToReceive', [
                'shippingsData' => $shippingsData
            ]);
    }
}
