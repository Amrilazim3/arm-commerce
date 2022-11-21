<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $user = User::factory()->unverified()->make(); // create a user without persisting into database 
        // $user = User::factory()->count(3)->unverified()->create(); // create unverified email and persisting into database
        // $user = User::factory()->create(); // create default user and persisting into database
        // dd($user);
    }
}
