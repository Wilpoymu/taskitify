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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('document_number', 12)->default('0000000000');
            $table->string('phone_number', 15)->default('00000000000');
            $table->string('address', 100)->default('Rua 0, 0');
            $table->unsignedBigInteger('country_id')->unsigned()->default(49);
            $table->unsignedBigInteger('state_id')->unsigned()->default(2);
            $table->unsignedBigInteger('city_id')->unsigned()->default(1);
            $table->rememberToken();
            $table->timestamps();

            // $table->foreign('country_id')->references('id')->on('countries')->onDelete('restrict');
            // $table->foreign('state_id')->references('id')->on('states')->onDelete('restrict');
            // $table->foreign('city_id')->references('id')->on('cities')->onDelete('restrict');
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
