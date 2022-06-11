<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;

class PasswordController extends Controller
{
    public function forgot()
    {
        return Inertia::render('Auth/ForgotPassword');
    }

    public function email(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', 'exists:users,email']
        ]);
 
        $status = Password::sendResetLink(
            $request->only('email')
        );
     
        return $status === Password::RESET_LINK_SENT
                    ? back()
                    : back()->withErrors(['email' => __($status)]);
    }

    public function reset($token, Request $request)
    {
        $email = $request->query('email');
        return Inertia::render('Auth/ResetPassword', [
            'token' => $token,
            'email' => $email
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email|exists:users,email',
            'password' => 'required|min:7|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => $password
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET         
            ? redirect()->route('login.index')->with('success', __($status))
            : back()->withErrors(['email' => [__($status)]]);
    }
}
