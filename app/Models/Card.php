<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    protected $casts = [
        'card_number' => 'encrypted',
        'cvv_code' => 'encrypted',
        'expiry_date' => 'encrypted'
    ];
}
