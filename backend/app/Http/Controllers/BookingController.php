<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function get_rides_by_user($id){

        $Bookings = Booking::where('user_id', $id)->with('ride')->get();
        
        return response()->json([
            "booked_rides" => $Bookings
        ]);

    }
}

