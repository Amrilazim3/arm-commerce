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

        // assign certain user to become admin
        $user = User::create([
            'name' => 'amrilazim',
            'email' => 'a.azim0711@gmail.com',
            'password' => 'asdasdasd',
        ]);
        
        $user->assignRole('admin');

        // assign certain user to become user
        // $users = User::where('id', '!=', 11)->lazy();
        // foreach ($users as $user) {
        //     $user->assignRole('user');
        // }
    }
}
