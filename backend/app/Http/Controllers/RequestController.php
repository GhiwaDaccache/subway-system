<?php

namespace App\Http\Controllers;

use App\Models\CoinRequest;
use Illuminate\Http\Request;

class RequestController extends Controller
{
   public function coin_request(Request $req)
    {
        echo $req->user_id;
        $coin_req = CoinRequest::create([
            "amount" => $req->amount,
            "user_id"=> $req->user_id
        ]);
        

        return response()->json([
            'message' => 'Coin request created successfully',
            'coin_request' => $coin_req
        ], 201);
    }
}
