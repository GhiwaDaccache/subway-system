<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;

class FacilityController extends Controller
{  
    public function update_facility(Request $req){
        $facility = Facility::where("station_id", $req->station_id)->get()[0];

            $facility->update([
                "wheelchair_accessibility" => $req->wheelchair_accessibility,
                "wifi" => $req->wifi,
                "self_check_in" => $req->self_check_in,
                "braille_guidelines" => $req->braille_guidelines,
                "vending_machine" => $req->vending_machine,
                "information_desk" => $req->information_desk,
                "toilets" => $req->toilets
            ]);

            return response()->json([
                "message" => "updated successfully"
            ], 200);

        }
    

    public function get_available_facilities($id){

        $facilities = Facility::where("station_id", $id)->get();

        if(!$facilities->isEmpty()){
            $facility = Facility::where("station_id", $id)->get()[0];
            return response()->json([
                "facilities" => $facility,
                "message" => "Facilities returned"
            ]);
        }else{
            $facility = Facility::create([
                "wheelchair_accessibility" => 0,
                "wifi" => 0,
                "self_check_in" => 0,
                "braille_guidelines" => 0,
                "vending_machine" => 0,
                "information_desk" => 0,
                "toilets" => 0,
                "station_id"=> $id
            ]);
    
            return response()->json([
                "message" => "created successfully"
            ], 201);
        }}
}


