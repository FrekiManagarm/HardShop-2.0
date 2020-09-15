<?php

namespace App\Http\Controllers;

use App\Boitier;
use Illuminate\Http\Request;

class BoitierController extends Controller
{
    public function index() 
    {
        return Boitier::all();
    }

    public function show(Boitier $boitier)
    {
        return $boitier;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'image' => 'required|unique:boitiers|max:255',
            'RGB' => 'boolean',
            'alim_inclus' => 'boolean',
            'couleur' => 'required',
            'façade_latérale' => 'required',
            'format' => 'required',
            'nom' => 'required|unique:boitiers|max:255',
            'ventilateur' => 'required'
        ]);

        $boitier = Boitier::create($request->all());

        return response()->json($boitier, 201);
    }

    public function update(Request $request, Boitier $boitier)
    {
        $boitier->update($request->all());
        
        return response()->json($boitier, 200);
    } 

    public function delete(Boitier $boitier) 
    {
        $boitier->delete();
        return response()->json(null, 204);
    }
}
