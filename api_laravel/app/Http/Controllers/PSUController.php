<?php

namespace App\Http\Controllers;

use App\Boitier;
use App\PSU;
use Illuminate\Http\Request;

class PSUController extends Controller
{
    public function index()
    {
        return Boitier::all();
    }

    public function show(PSU $pSU)
    {
        return $pSU;
    }

    public function store(Request $request)
    {
        $pSU = PSU::create($request->all());

        return response()->json($pSU, 201);
    }

    public function update(Request $request, PSU $pSU)
    {
        $pSU->update($request->all());

        return response()->json($pSU, 200);
    }

    public function delete(PSU $pSU)
    {
        $pSU->delete();
        return response()->json(null, 204);
    }
}
