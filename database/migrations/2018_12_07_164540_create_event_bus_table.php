<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventBusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_bus', function (Blueprint $table) {
            $table->increments('id');
            $table->dateTime('date_diffusion')->nullable();
            $table->string('heure_diffusion_debut')->nullable();
            $table->string('heure_diffusion_fin')->nullable();
            $table->integer('user_id')->unsigned();
            $table->integer('event_id')->unsigned();
            $table->integer('bus_id')->unsigned();
            $table->integer('ville_id')->unsigned();
            $table->foreign('ville_id')->references('id')->on('villes')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');
            $table->foreign('bus_id')->references('id')->on('buses')->onDelete('cascade');

            $table->timestamps();
        $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_bus');
    }
}
