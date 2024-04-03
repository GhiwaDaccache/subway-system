<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Passenger;

class PassengerController extends Controller
{
    public function get_all_passengers(){
        $allPassengers=Passenger::all();
        return $allPassengers; 
        }
}
