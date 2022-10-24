<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\StatesCitiesTrait;
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
        // get the user's cart and check if has product with is_checkout == true.

        $statesCitiesRes = $this->getStatesCitiesData();

        return Inertia::render('User/Checkout', [
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
