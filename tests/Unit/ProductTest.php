<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_post_request()
    {
        $user = User::where('email', 'a.azim0711@gmail.com')->first();

        $response = $this->actingAs($user)->post("admin/products", [
            "name" => "jog shoes",
            "description" => "page editors It is a long established fact that a reader will be distracted by the readable content of a page It is a long established fact that a reader will be distracted by the readable content of a page It is a long established fact that a reader will be distracted by the readable content of a page It is a long established fact that a reader will be distracted by the readable content of a page",
            "category" => "Shoes",
            "stock" => 20,
            "price" => 120,
            "media" => []
        ]);

        $response->assertSessionHasNoErrors();
        // $response->assertStatus(301);
    }
}
