<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoinRequest extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTO(User::class);
    }
}