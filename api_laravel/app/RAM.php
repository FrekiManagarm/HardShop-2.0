<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RAM extends Model
{
    protected $fillable = [
        'capacité',
        'fréquence',
        'image',
        'interface',
        'latence',
        'marque',
        'nom',
        'quantité'
    ];
}
