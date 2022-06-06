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
        // put the api_key in services config/app.php file 
        $apiCall = Http::get('http://phonevalidation.abstractapi.com/v1/?api_key=e340c3e1cdc54b7487f6d19839bcb67f&phone=' . $value);
        return $apiCall->json('valid');
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Phone number is not valid. Check if it follow the format or not.';
    }
}
