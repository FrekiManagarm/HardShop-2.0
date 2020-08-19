<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHDDSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('h_d_d_s', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->integer('RPM');
            $table->string('capacité');
            $table->string('format');
            $table->string('interface');
            $table->string('marque');
            $table->string('mémoire_cache');
            $table->string('nom');
            $table->string('transfert');
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
        Schema::dropIfExists('h_d_d_s');
    }
}
