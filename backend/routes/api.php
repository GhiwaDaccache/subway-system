<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RideController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('create_ride', [RideController::class, "create_ride"]);
Route::get('ride_from_station/{id}', [RideController::class, "ride_from_station"]);
Route::post('update_facility', [FacilityController::class, "update_facility"]);
Route::post('update_station_hours', [StationController::class, "update_station_hours"]);
Route::get('read_reviews', [ReviewController::class, "read_reviews"]);
Route::post('approve_reviews', [ReviewController::class, "approve_reviews"]);
Route::get('get_available_facilities/{id}', [FacilityController::class, "get_available_facilities"]);


Route::get('get_all_stations', [StationController::class, "get_all_stations"]);
Route::get('get_all_rides', [RideController::class, "get_all_rides"]);


Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group([
    "middleware" => ["auth:api"],
], function () {
    Route::get("refresh", [UserController::class, 'refreshToken']);
    Route::get("logout", [UserController::class, 'logout']);
});

