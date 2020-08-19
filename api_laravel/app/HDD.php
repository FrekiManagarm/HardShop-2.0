<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HDD extends Model
{
    protected $fillable = [
        'RPM',
        'capacité',
        'format',
        'image',
        'interface',
        'mémoire_cache',
        'nom',
        'transfert'
    ];
}
