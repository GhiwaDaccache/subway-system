<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Pass extends Model
{
    use HasFactory;
    public function passenger()
    {
        return $this->hasOne(User::class);
    }
}
