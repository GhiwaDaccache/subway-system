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
        Schema::create('rides', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->time('departure_time');
            $table->time('arrival_time');
            $table->integer('price');
            $table->unsignedBigInteger("departure_station");
            $table->foreign("departure_station")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("arrival_station");
            $table->foreign("arrival_station")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });

        Schema::create('passes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("passenger_id");
            $table->foreign("passenger_id")->references("id")->on("passengers")->onDelete("cascade")->onUpdate("cascade");
            $table->integer("count");
            $table->timestamps();
        });

        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->datetime('booking_time');
            $table->unsignedBigInteger("pass_id");
            $table->foreign("pass_id")->references("id")->on("passes")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("passenger_id");
            $table->foreign("passenger_id")->references("id")->on("passengers")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("ride_id");
            $table->foreign("ride_id")->references("id")->on("rides")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });

        Schema::create('coin_requests', function (Blueprint $table) {
            $table->id();
            $table->integer("amount");
            $table->unsignedBigInteger("passenger_id");
            $table->foreign("passenger_id")->references("id")->on("passengers")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("admin_id");
            $table->foreign("admin_id")->references("id")->on("admins")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });

        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->string("message");
            $table->datetime('sent_time');
            $table->unsignedBigInteger("passenger_id");
            $table->foreign("passenger_id")->references("id")->on("passengers")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("manager_id");
            $table->foreign("manager_id")->references("id")->on("managers")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
        });

        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->integer("rating");
            $table->string("description");
            $table->unsignedBigInteger("passenger_id");
            $table->foreign("passenger_id")->references("id")->on("passengers")->onDelete("cascade")->onUpdate("cascade");
            $table->unsignedBigInteger("ride_id");
            $table->foreign("ride_id")->references("id")->on("rides")->onDelete("cascade")->onUpdate("cascade");
            $table->timestamps();
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
