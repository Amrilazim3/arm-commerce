<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Traits\StatesCitiesTrait;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CheckoutController extends Controller
{
    use StatesCitiesTrait;

    public function index()
    {
        $statesCitiesRes = $this->getStatesCitiesData();

        return Inertia::render('User/Checkout', [
            'addresses' => User::where('id', Auth::id())->first()->addresses,
            'states' => $statesCitiesRes['states'],
            'statesCities' => $statesCitiesRes['statesCities']
        ]);
    }
}
