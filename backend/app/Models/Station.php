<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Station extends Model
{
    use HasFactory;
    protected $fillable = ["name", "location", "opening_time", "closing_time","status"];
        public function rides()
    {
        return $this->hasMany(Ride::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
