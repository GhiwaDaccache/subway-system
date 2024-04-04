<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name"=>'user',
            "email"=>'user@gmail.com',
            "password"=>'1234',
            "coins"=>0,
            "role"=>"admin"
     
        ]);

        User::create([
            "name"=>'user2',
            "email"=>'user2@gmail.com',
            "password"=>'12',
            "coins"=>0,
            "role"=>"manager",
            "station_id"=>1
     
        ]);

        User::create([
            "name"=>'user',
            "email"=>'user3@gmail.com',
            "password"=>'12',
            "coins"=>80,
            "role"=>"passenger"
     
        ]);
    }
}
