<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\User;
use App\Rules\PhoneNumberValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/Addresses', [
            'addresses' => User::where('id', Auth::id())->first()->addresses, // using lazy load still acceptable because we only accessing one user's addresses
        ]);
    }

    public function store(Request $request)
    {
        $this->validateAddress($request);

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

    public function update(Address $address, Request $request)
    {
        $this->validateAddress($request);

        Address::where('id', $address->id)->update([
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

    public function destroy(Address $address)
    {
        Address::where('id', $address->id)->delete();
        return redirect()->back();
    }

    protected function validateAddress($request)
    {
        $request->validate([
            'phoneNumber' => ['required', new PhoneNumberValidation, 'integer'],
            'fullName' => ['required'],
            'state' => ['required'],
            'city' => ['required'],
            'postalCode' => ['required', 'integer', 'digits:5', 'postal_code:MY'],
            'streetName' => ['required']
        ]);
    }
}
