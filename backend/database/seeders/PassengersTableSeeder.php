<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PassengersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Passenger::create([
            "name"=>'Alex Keen',
            "email"=>'alex@email.com',
            "password"=>'123456',
            "coins"=> 0            
        ]);
    }
}
