<?php

use App\Http\Controllers\RideController;
use App\Http\Controllers\FacilityController;
use App\Http\Controllers\StationController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('create_ride', [RideController::class, "create_ride"]);
Route::get('ride_from_station', [RideController::class, "ride_from_station"]);
Route::post('update_facility', [FacilityController::class, "update_facility"]);
Route::post('update_station_hours', [StationController::class, "update_station_hours"]);
Route::get('read_reviews', [ReviewController::class, "read_reviews"]);
Route::post('approve_reviews', [ReviewController::class, "approve_reviews"]);


