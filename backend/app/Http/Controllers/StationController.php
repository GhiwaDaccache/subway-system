<?php

namespace App\Http\Controllers;

use App\Models\Station;
use App\Models\Manager;
use Illuminate\Http\Request;

class StationController extends Controller
{
    public function get_stations_with_manager_name(){

      $stations_with_manager_name=Station::with('manager')->get();
        return response()->json($stations_with_manager_name);
       
     }
     public function get_all_stations(){

        $stations_details=Station::get();
          return response()->json($stations_details);
         
       }


    public function update_station_hours(Request $request){
        $station = Station::find($request->station_id);

        if (!$station) {
            return response()->json(['error' => 'Station not found'], 404);
        }

        $station->update([
            'opening_time' => $request->opening_time,
            'closing_time' => $request->closing_time,
        ]);

        return response()->json([
         'message' => 'Station hours updated successfully'], 
         200);
    }

}


