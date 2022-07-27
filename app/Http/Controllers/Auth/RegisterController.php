<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\TriggerRegisteredEventJob;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:7', 'confirmed'],
        ]);

        $user = User::create($validated);

        // assign new registered user as nomral user.
        $user->assignRole('user');

        TriggerRegisteredEventJob::dispatch($user);

        Auth::login($user, !!$request->isRememberMe);

        return redirect()->route('products.index')->with('success', 'email verification link has been sent');
    }
}
