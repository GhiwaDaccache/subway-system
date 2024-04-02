<?php

namespace App\Http\Controllers;

use App\Models\Station;
use Illuminate\Http\Request;

class StationController extends Controller
{
   public function get_all_stations(){
      $allStations=Station::all();
      return $allStations; 
      }
}


