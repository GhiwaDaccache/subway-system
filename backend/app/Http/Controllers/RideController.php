<?php

namespace App\Http\Controllers;

use App\Models\Ride;
use App\Models\Station;
use Illuminate\Http\Request;

class RideController extends Controller
{
    public function create_ride(Request $req)
    {
        $ride = Ride::create([
            "date" => $req->date,
            "departure_time"=>$req->departure_time,
            "arrival_time"=>$req->arrival_time,
            "price"=>$req->price,
            "departure_station"=>$req->departure_station,
            "arrival_station"=>$req->arrival_station
        ]);

        return response()->json([
            "message" => "created successfully"
        ], 201);
    }
}
