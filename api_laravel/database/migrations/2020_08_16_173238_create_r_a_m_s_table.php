<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRAMSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('r_a_m_s', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('capacité');
            $table->string('fréquence');
            $table->string('interface');
            $table->string('latence');
            $table->string('marque');
            $table->string('nom');
            $table->string('quantité');
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
        Schema::dropIfExists('r_a_m_s');
    }
}
