<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Passenger;


class Pass extends Model
{
    use HasFactory;
    public function passenger()
    {
        return $this->hasOne(Passenger::class);
    }
}
