<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('url');
            $table->string('exclusivity');

            $table->integer('ad_id')->unsigned();
            $table->integer('user_id')->unsigned();


            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('ad_id')->references('id')->on('ads')->onDelete('cascade');
           


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
        Schema::dropIfExists('events');
    }
}
