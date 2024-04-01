<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Station;

class StationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Station::create([
            "name"=>'Beirut st',
            "location"=>'Beirut',
            "opening_time"=>'2024-04-01 09:00:00',
            "closing_time"=>'2024-04-01 19:30:00'
        ]);

        Station::create([
            "name"=>'Jounieh st',
            "location"=>'Jounieh',
            "opening_time"=>'2024-04-01 06:00:00',
            "closing_time"=>'2024-04-01 22:30:00'
        ]);

        Station::create([
            "name"=>'Tripoli st',
            "location"=>'Tripoli',
            "opening_time"=>'2024-04-01 09:00:00',
            "closing_time"=>'2024-04-01 21:30:00'

        ]);
    }
}
