<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Hash;

class VerifyNewPassword implements Rule
{
    public function __construct($email)
    {
        $this->email = $email;
    }

    public function passes($attribute, $value)
    {
        $user = User::where('email', $this->email)->first();

        if (!$user) {
            return false;
        }

        return !Hash::check($value, $user->password);
    }

    public function message()
    {
        return 'The new password cannot be same with old password.';
    }
}
