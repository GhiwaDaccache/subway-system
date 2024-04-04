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
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->before('coins');
            $table->unsignedBigInteger("station_id")->nullable();
            $table->foreign("station_id")->references("id")->on("stations")->onDelete("cascade")->onUpdate("cascade");
        });

        Schema::table('chats', function (Blueprint $table) {
            $table->dropForeign(['manager_id']);
            $table->foreign("manager_id")->references("id")->on("users")->onDelete("cascade")->onUpdate("cascade");
        });

        Schema::table('coin_requests', function (Blueprint $table) {
            $table->dropForeign(['admin_id']);
            $table->dropColumn('admin_id');
        });

        Schema::dropIfExists('managers');
        
        Schema::dropIfExists('admins');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
