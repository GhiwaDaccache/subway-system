<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ride;

class RidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Ride::create([
            "date" => '2024-04-01',
            "departure_time" => '09:00:00',
            "arrival_time" => '09:25:00',
            "price" => 5,
            "departure_station" => 3,
            "arrival_station" => 4,
        ]);

        Ride::create([
            "date" => '2024-04-01',
            "departure_time" => '10:00:00',
            "arrival_time" => '10:35:00',
            "price" => 5,
            "departure_station" => 4,
            "arrival_station" => 5,
        ]);
    }
}
