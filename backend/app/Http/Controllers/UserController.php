<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Exception;

use App\Models\CoinRequest;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    // Register (POST - formData)
    public function register(Request $request)
    {
        try {
            // Data Validation
            $request->validate([
                "name" => "required",
                "email" => "required|email|unique:users",
                "password" => "required",
            ]);

        // Data Save
        $user =  User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            "role"=>"passenger"
        ]);
          

            $token = JWTAuth::fromUser($user);

            // Response: 
            return response()->json([
                "status" => 200,
                "message" => "User registered successfully",
                "token" => $token,
            ]);
        } catch (\Illuminate\Validation\ValidationException $e) {

            // Validation error occurred
            return response()->json([
                "error" => $e->errors(),
                "message" => "Validation failed. Please check your input.",
            ], 400);
        } catch (\Exception $e) {
            // Other unexpected errors
            return response()->json([
                "error" => $e->getMessage(),
                "message" => "An error occurred while registering the user.",
            ], 500);
        }
    }


    // Login (POST - formData)
    public function login(Request $request)
    {
        try {
            $request->validate([
                "email" => "required|email",
                "password" => "required"
            ]);

            // JWTAuth and attempt
            $token = JWTAuth::attempt([
                "email" => $request->email,
                "password" => $request->password,
            ]);

            if (!empty($token)) {
                return response()->json([
                    "status" => 200,
                    "message" => "User logged in successfully",
                    "token" => $token,
                ]);
            } else {
                throw new \Exception("Invalid login details.");
            }
        } catch (\Illuminate\Validation\ValidationException $e) {
            // Validation error occurred
            return response()->json([
                "error" => $e->errors(),
                "message" => "Validation failed. Please check your input.",
            ], 400);
        } catch (\Exception $e) {
            // Other unexpected errors
            return response()->json([
                "error" => $e->getMessage(),
                "message" => "An error occurred during login.",
            ], 500);
        }
    }


    // Refresh Token (GET)
    public function refreshToken()
    {
        $newToken = JWTAuth::refresh();

        return response()->json([
            "status" => true,
            "message" => "New Access token generated",
            "token" => $newToken,
        ]);
    }

    // Logout (GET)
    public function logout()
    {
        auth()->logout();
        return response()->json([
            "status" => true,
            "message" => "User logged out successfully"
        ]);
    }


    public function get_passengers_with_pass(){
        $passenger_with_pass=User::with('pass')->get();
        return $passenger_with_pass;
        
        } 

        public function get_coin_request(){
            $get_coinRequest=CoinRequest::with('user')->get();
            return $get_coinRequest;
            
            } 


    public function getUser()
    {
        $user = auth()->user();
        return response()->json([
            "user" => $user,
        ]);
    }

    public function getAllUsers()
    {
        $users = User::where("role", "passenger")->get();
        return response()->json([
            "users" => $users,
        ]);
    }


    public function handle_coin_request(Request $request)
    {
        $user = User::find($request->user_id);
    
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }
    
        $prevBalance = $user->coins; 
        $balance = $request->amount;
        $newBalance = (int)$prevBalance + (int)$balance;
    
        $user->update([
            "coins" => $newBalance
        ]);
        
        $coinRequest=CoinRequest::find($request->id);
        $coinRequest->delete();
        return response()->json(['message' => 'User coins updated successfully'], 200); 
    }

}
