<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CPU extends Model
{
    protected $fillable = [
        'architecture',
        'cache',
        'chipset',
        'chipset_graphique',
        'fréquence',
        'fréquence_boost',
        'image',
        'nb_coeur',
        'nb_threads',
        'nom',
        'overclocking',
        'socket',
        'type'
    ];
}
