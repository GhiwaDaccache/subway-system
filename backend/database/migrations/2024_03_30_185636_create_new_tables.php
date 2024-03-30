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
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("email");
            $table->string("password");
            $table->timestamps();
        });

        Schema::create('stations', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("location");
            $table->datetime('opening_time');
            $table->datetime('closing_time');
            $table->timestamps();
        });

        Schema::create('managers', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("email");
            $table->string("password");
            $table->unsignedBigInteger("station_id");
            $table->foreign("station_id")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });

        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->tinyInteger("wheelchair_accessibility");
            $table->tinyInteger("wifi");
            $table->tinyInteger("self_check_in");
            $table->tinyInteger("braille_guidelines");
            $table->tinyInteger("vending_machine");
            $table->tinyInteger("information_desk");
            $table->tinyInteger("toilets");
            $table->unsignedBigInteger("station_id");
            $table->foreign("station_id")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('new_tables');
    }
};
