<?php

namespace App\Http\Controllers\User\Account;

use App\Http\Controllers\Controller;
use App\Jobs\SendEmailVerificationJob;
use App\Rules\VerifyPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChangeEmailController extends Controller
{
    public function index()
    {
        return Inertia::render('User/Account/ChangeEmail'); 
    }

    public function update(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'currentEmail' => ['required', 'email', 'exists:users,email'],
            'newEmail' => ['required', 'email', 'unique:users,email,' . $user->id],
            'password' => ['required', new VerifyPassword($user->email)],
        ]);

        $user->update([
            'email' => $request->newEmail,
            'email_verified_at' => null
        ]);

        SendEmailVerificationJob::dispatch($user);

        return redirect()->route('products.index')->with('success', 'email verification link has been sent');
    }
}
