<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $adminPermissions = [
            'create product',
            'edit product',
            'delete product'
        ];

        foreach ($adminPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $role = Role::where('name', 'admin')->first();

        // assign adminPermissions to role admin.
        foreach ($adminPermissions as $permission) {
            $role->givePermissionTo($permission);
        }
    }
}
