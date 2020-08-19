<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCPUSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('c_p_u_s', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('architecture');
            $table->string('cache');
            $table->string('chipset');
            $table->string('chipset_graphique');
            $table->string('fréquence');
            $table->string('fréquence_boost');
            $table->integer('nb_coeur');
            $table->integer('nb_threads');
            $table->string('nom');
            $table->boolean('overclocking');
            $table->string('socket');
            $table->string('type');
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
        Schema::dropIfExists('c_p_u_s');
    }
}
