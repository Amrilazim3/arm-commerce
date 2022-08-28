<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['created_at'] ?? false, function ($query, $created_at) {
            $query->orderBy('created_at', $created_at);
        });

        $query->when($filters['stock'] ?? false, function ($query, $stock) {
            $query->orderBy('stock', $stock);
        });

        $query->when($filters['search'] ?? false, function ($query, $search) {
            $query->orWhereHas('category', function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->orWhere('name', 'like', '%' . $search . '%');
        });
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }
}
