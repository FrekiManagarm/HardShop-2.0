<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSSDSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('s_s_d_s', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('capacité');
            $table->string('connectique');
            $table->string('format');
            $table->string('interface');
            $table->string('lecture');
            $table->string('marque');
            $table->string('nom');
            $table->string('écriture');
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
        Schema::dropIfExists('s_s_d_s');
    }
}
