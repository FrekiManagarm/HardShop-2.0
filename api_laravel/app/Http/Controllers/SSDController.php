<?php

namespace App\Http\Controllers;

use App\Boitier;
use App\SSD;
use Illuminate\Http\Request;

class SSDController extends Controller
{
    public function index()
    {
        return Boitier::all();
    }

    public function show(SSD $sSD)
    {
        return $sSD;
    }

    public function store(Request $request)
    {
        $sSD = SSD::create($request->all());

        return response()->json($sSD, 201);
    }

    public function update(Request $request, SSD $sSD)
    {
        $sSD->update($request->all());

        return response()->json($sSD, 200);
    }

    public function delete(SSD $sSD)
    {
        $sSD->delete();

        return response()->json(null, 204);
    }
}
