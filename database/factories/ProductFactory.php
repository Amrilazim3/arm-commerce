<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $productName = "";
        foreach ($this->faker->words(4) as $name) {
            $productName .= $name . " ";
        }
        $adminUser = User::where('email', 'a.azim0711@gmail.com')->first();
        return [
            'user_id' => $adminUser->id,
            'category_id' => rand(1, 5),
            'name' => $productName,
            'slug' => Str::slug($productName),
            'description' => $this->faker->realText(300),
            'stock' => rand(1, 100),
            'price' => rand(50, 200),
        ];
    }
}
