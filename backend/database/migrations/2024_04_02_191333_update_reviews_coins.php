<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('reviews', function (Blueprint $table) {
            $table->integer('status')->before('created_at');
        });

        Schema::table('coin_requests', function (Blueprint $table) {
            $table->integer('status')->before('created_at');
        });

        Schema::table('stations', function (Blueprint $table) {
            $table->integer('status')->before('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
