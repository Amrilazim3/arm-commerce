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
            'status'
        ])
            ->where('user_id', auth()->user()->id)
            ->with(['order' => function ($item) {
                return $item->select([
                    'id',
                    'user_id',
                    'cart_id'
                ])
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
}
