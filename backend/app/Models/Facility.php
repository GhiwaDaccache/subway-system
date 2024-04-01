<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;
    protected $fillable = ["wheelchair_accessibility","wifi", "self_check_in", "price", "braille_guidelines", "vending_machine", "information_desk", "toilets", "station_id"];
    public function facility_station()
    {
        return $this->belongsTo(Station::class);
    }
}
