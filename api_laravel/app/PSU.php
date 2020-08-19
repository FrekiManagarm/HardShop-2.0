<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PSU extends Model
{
    protected $fillable = [
        'certif',
        'format',
        'image',
        'marque',
        'modulaire',
        'nom',
        'puissance'
    ];
}
