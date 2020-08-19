<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SSD extends Model
{
    protected $fillable = [
        'capacité',
        'connectique',
        'format',
        'image',
        'interface',
        'lecture',
        'marque',
        'nom',
        'écriture'
    ];

    public function SSDs() {
        return $this->hasMany('App\SSD');
    }
}
