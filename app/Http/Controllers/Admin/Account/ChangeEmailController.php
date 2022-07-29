<?php

namespace App\Http\Controllers\Admin\Account;

use App\Http\Controllers\Controller;
use App\Jobs\SendEmailVerificationNotificationJob;
use App\Rules\VerifyPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChangeEmailController extends Controller
{
    const ADMIN = 1;
    const USER = 2;

    public function index()
    {
        return Inertia::render('Admin/Account/ChangeEmail');
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
            'email_verified_at' => null,
            'service' => null,
            'service_id' => null,
        ]);

        // make this user become a normal user
        $user = $user->roles->where('id', self::ADMIN)->first();
        $user->pivot->update(['role_id' => self::USER]);

        SendEmailVerificationNotificationJob::dispatch(Auth::user());

        return redirect()->route('products.index')->with('success', 'email verification link has been sent');
    }
}
