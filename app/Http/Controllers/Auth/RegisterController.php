<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

        if ($validated) {
            User::create($validated);

            if (Auth::attempt(
                [
                    'email' => $request->email,
                    'password' => $request->password
                ],
                $request->isRememberMe == 1 ? true : false
            )) {
                $request->session()->regenerate();

                return redirect()->intended('/products');
            }

            return false;
        }
    }

    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        User::where('id', $request->user()->id)->delete();

        return redirect('/');
    }
}
