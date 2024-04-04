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
            "reviews" => $reviews
        ]);
    }

    public function approve_reviews(Request $req)
    {
        $review = Review::where('id', $req->review_id)->first();
        $approved = $req->input('approved');

        if (!$review) {
            return response()->json([
                'error' => 'Review not found'
            ], 404);
        }

        $review->update([
            "status" => $req->approved]);
        
        return response()->json([
            "message" => "updated successfully"
        ], 200);
    }

    public function get_reviews_with_user_and_ride()
    {
        $reviews_with_user_ride = Review::with('user')->get();
        
        return response()->json(
            $reviews_with_user_ride
        );
    }
}
