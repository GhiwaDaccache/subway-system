<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function read_reviews()
    {
        $reviews = Review::orderBy('created_at', 'desc')->get();
        
        return response()->json([
            "Reviews" => $reviews
        ]);
    }
}
