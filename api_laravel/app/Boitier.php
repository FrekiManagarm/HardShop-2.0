<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Boitier extends Model
{
    protected $fillable = [
        'image',
        'RGB',
        'alim_inclus',
        'couleur',
        'façade_latérale',
        'format',
        'nom',
        'ventilateur'
    ];
}
