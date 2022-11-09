<?php

namespace App\Http\Controllers\User\Purchase;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function index()
    {
        $ordersData = Order::select([
            'id',
            'cart_id',
            'bill_id',
            'bill_url',
            'status',
            'created_at'
        ])
            ->where('user_id', auth()->user()->id)
            ->where('status', 'due')
            ->orWhere('status', 'fail')
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
            }])
            ->get();

        return Inertia::render('User/Purchase/ToPay', [
            'ordersData' => $ordersData
        ]);
    }
}
