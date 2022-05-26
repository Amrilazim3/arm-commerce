<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddressController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/Addresses');
    }

    public function create()
    {
        return Inertia::render('User/Account/CreateAddress');
    }

    public function store(Request $request)
    {
        //
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
