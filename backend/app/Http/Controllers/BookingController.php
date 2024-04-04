<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function get_rides_by_user($id){

        $bookings = Booking::where('user_id', $id)->with('ride')->get();
        
        return response()->json([
            "booked_rides" => $bookings
        ]);

    }

    public function book_ride(Request $req)
    {
        $booking = Booking::create([
            "amount" => $req->amount,
            "user_id"=> $req->user_id
        ]);
        

        return response()->json([
            'message' => 'Coin request created successfully',
            'coin_request' => $coin_req
        ], 201);
    }
}

