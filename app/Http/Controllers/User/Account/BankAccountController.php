<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Models\BankAccount;
use Illuminate\Http\Request;

class BankAccountController extends Controller
{
    public function store(Request $request)
    {
        return redirect()->back();
        dd($request);
    }

    public function update(Request $request, BankAccount $bankAccount)
    {
        dd($request);
    }

    public function destroy(BankAccount $bankAccount)
    {
        dd($bankAccount);
    }
}
