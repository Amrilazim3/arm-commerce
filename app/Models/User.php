<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_admin' => 'boolean'
    ];

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = bcrypt($value);
    }

    public function setProfileImageUrlAttribute($value)
    {
        if ($value) {
            $this->attributes['profile_image_url'] = asset('storage/' . $value);
            return;
        }
        $this->attributes['profile_image_url'] = null;
    }

    public function getPhoneNumberAttribute()
    {
        return substr(strval($this->attributes['phone_number']), 1);
    }
}
