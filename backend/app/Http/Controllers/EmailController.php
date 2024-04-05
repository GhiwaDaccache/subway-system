<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send_Email(Request $request){
        $email=$request->email;
        Mail::to($email->email)->send(new emailMailer());
        return response()->json([
            "message"=>"email sent"
        ]);

    }
}
