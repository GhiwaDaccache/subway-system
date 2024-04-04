<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ride extends Model
{
    use HasFactory;
    protected $fillable = ["date","departure_time", "arrival_time", "price", "departure_station", "arrival_station"];
    public function departure_station()
    {
        return $this->belongsTo(Station::class,'departure_station');
    }
    public function arrival_station()
    {
        return $this->belongsTo(Station::class,'arrival_station');
    }
}
