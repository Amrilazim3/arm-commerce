<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class EmailVerificationController extends Controller
{
    public function verify(Request $request): RedirectResponse
    {
        $user = User::find($request->route('id'));

        if ($user->hasVerifiedEmail()) {
            return redirect()->route('products.index')->with('success', 'email already verified');
        }

        if ($user->markEmailAsVerified()) {
            event(new Verified($user));
        }

        return redirect()->route('products.index')->with('success', 'email is verified');
    }

    public function resend(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        
        return redirect()->back()->with('success', 'email verification link has been sent');
    }
}
