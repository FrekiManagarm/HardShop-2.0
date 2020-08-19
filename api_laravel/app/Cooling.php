<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cooling extends Model
{
    protected $fillable = [
        'bruit',
        'format',
        'image',
        'marque',
        'matériaux',
        'nom',
        'socket',
        'type'
    ];

    public function Coolings() {
        return $this->hasMany('App\Cooling');
    }
}
