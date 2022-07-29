<?php

namespace App\Http\Controllers\Admin\Account;

use App\Http\Controllers\Controller;
use App\Rules\VerifyNewPassword;
use App\Rules\VerifyPassword;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChangePasswordController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Account/ChangePassword');
    }

    public function update(Request $request)
    {
        $user = Auth::user();
        
        $request->validate([
            'oldPassword' => ['required', new VerifyPassword($user->email)],
            'newPassword' => ['required', 'min:7', new VerifyNewPassword($user->email)],
            'newPasswordConfirmation' => ['required', 'same:newPassword']
        ]);

        $user->update([
            'password' => $request->newPassword
        ]);

        return redirect()->route('products.index');
    }
}
