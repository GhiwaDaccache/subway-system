<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $fillable = ["status"];
    public function add_review()
    {
        return $this->belongsTo(Passenger::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function ride()
    {
        return $this->belongsTo(Ride::class);
    }
}
