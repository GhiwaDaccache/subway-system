<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    public function ride()
    {
        return $this->belongsTo(Ride::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
