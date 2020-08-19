<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePSUSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('p_s_u_s', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('certif');
            $table->string('format');
            $table->string('marque');
            $table->string('modulaire');
            $table->string('nom');
            $table->string('puissance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('p_s_u_s');
    }
}
