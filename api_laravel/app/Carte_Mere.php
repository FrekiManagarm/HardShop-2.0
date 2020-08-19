<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Carte_Mere extends Model
{
    protected $fillable = [
        'chipset',
        'constructeur',
        'format',
        'fréquence_mémoire',
        'image',
        'nom',
        'proco_compatible',
        'socket'
    ];
}
