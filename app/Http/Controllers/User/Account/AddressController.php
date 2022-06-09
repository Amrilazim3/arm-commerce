<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Rules\PhoneNumberValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/Addresses', [
            'addresses' => Address::where('user_id', Auth::user()->id)->get()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'phoneNumber' => ['required', 'integer', new PhoneNumberValidation],
            'fullName' => ['required'],
            'state' => ['required'],
            'city' => ['required'],
            'postalCode' => ['required', 'integer', 'digits:5', 'postal_code:MY'],
            'streetName' => ['required']
        ]);

        Address::create([
            'user_id' => Auth::user()->id,
            'full_name' => $request->fullName,
            'phone_number' => $request->phoneNumber,
            'state' => $request->state,
            'city' => $request->city,
            'postal_code' => $request->postalCode,
            'street_name' => $request->streetName,
        ]);

        return redirect()->back();
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
