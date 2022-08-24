<?php

namespace Database\Seeders;

use App\Models\Variant;
use Illuminate\Database\Seeder;

class VariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $variants = [
            'Size',
            'Color',
            'Weight'
        ];

        foreach ($variants as $variant) {
            Variant::create([
                'name' => $variant
            ]);
        }
    }
}
