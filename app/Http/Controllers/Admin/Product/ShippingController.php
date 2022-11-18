<?php

namespace App\Http\Controllers\Admin\Product;
use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Inertia\Inertia;

class ShippingController extends Controller
{
    public function index()
    {
        $shippings = Shipping::select([
            'id',
            'order_id',
            'user_id',
            'status'
        ])
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
            ->paginate(10);

        return Inertia::render('Admin/Products/Shippings', [
            'shippingsData' => $shippings
        ]);
    }

    public function update(Shipping $shipping)
    {
        $shipping->status = 'shipped';
        
        $shipping->save();

        return redirect()->back();
    }
}

