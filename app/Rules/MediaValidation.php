<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class MediaValidation implements Rule
{
    public function __construct()
    {
        //
    }

    public function passes($attribute, $value)
    {
        foreach ($value as $arrayElement) {
            if (null !== $arrayElement) {
                return true;
            }
        }

        return false;
    }

    public function message()
    {
        return 'Must have at least 1 file uploaded.';
    }
}
