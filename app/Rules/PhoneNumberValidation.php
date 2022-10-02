<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Http;

class PhoneNumberValidation implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $apiCall = Http::get(
            'http://phonevalidation.abstractapi.com/v1/?api_key='
            . config('services.abstractapi.api_key')
            . '&phone='
            . $value
        );
        return $apiCall->json('valid');
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Phone number is not valid. Check if it follow the malaysian format or not.';
    }
}
