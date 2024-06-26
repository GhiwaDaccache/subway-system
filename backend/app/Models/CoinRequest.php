<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoinRequest extends Model
{
    use HasFactory;
    protected $fillable = ["amount", "user_id"];
    public function user()
    {
        return $this->belongsTO(User::class);
    }
}
