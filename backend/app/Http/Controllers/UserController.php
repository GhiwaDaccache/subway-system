<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Contracts\Providers\JWT;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    // Register (POST - formData)
    public function register(Request $request)
    {
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
        ]);

        $token = JWTAuth::fromUser($user);

        // Response: 
        return response()->json([
            "status" => true,
            "message" => "User registered successfully",
            "token" => $token,
        ]);
    }

    // Login (POST - formData)
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        // JWTAuth and attemp
        $token = JWTAuth::attempt([
            "email" => $request->email,
            "password" => $request->password,
        ]);

        // Response 
        if (!empty($token)) {
            return response()->json([
                "status" => true,
                "message" => "User logged in successfully",
                "token" => $token,
            ]);
        }

        return response()->json([
            "status" => false,
            "message" => "Invalid Login details",
        ]);
    }

    // Refresh Token (GET)
    public function refreshToken()
    {
        $newToken = auth()->refresh();

        return response()->json([
            "status" => true,
            "message" => "New Access token generated",
            "token" => $newToken,
        ]);
    }

    // Logout (GET)f
    public function logout()
    {
        auth()->logout();
        return response()->json([
            "status" => true,
            "message" => "User logged out successfully"
        ]);
    }
}
