<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(['name' => 'admin']);
        Role::create(['name' => 'user']);

        $user = User::create([
            'name' => 'amrilazim',
            'email' => 'a.azim0711@gmail.com',
            'password' => 'asdasdasd',
        ]);
        
        $user->assignRole('admin');

        $users = User::where('email', '!=', 'a.azim0711@gmail.com')->get();

        foreach ($users as $user) {
            $user->assignRole('user');
        }
    }
}
