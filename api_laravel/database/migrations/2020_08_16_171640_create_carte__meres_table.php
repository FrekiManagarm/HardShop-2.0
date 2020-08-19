<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarteMeresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carte__meres', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('chipset');
            $table->string('constructeur');
            $table->string('format');
            $table->string('fréquence_mémoire');
            $table->string('nom');
            $table->string('proco_compatible');
            $table->string('socket');
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
        Schema::dropIfExists('carte__meres');
    }
}
