<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/Profile');
    }

    public function store()
    {
        //
    }
}
