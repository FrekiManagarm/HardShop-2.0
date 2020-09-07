<?php

namespace App\Http\Controllers;

use App\GPU;
use Illuminate\Http\Request;

class GPUController extends Controller
{
    public function index()
    {
        return GPU::all();
    }

    public function show(GPU $gPU)
    {
        return $gPU;
    }

    public function store(Request $request)
    {
        $gPU = GPU::create($request->all());

        return response()->json($gPU, 201);
    }

    public function update(Request $request, GPU $gPU)
    {
        $gPU->update($request->all());

        return response()->json($gPU);
    }

    public function delete(GPU $gPU)
    {
        $gPU->delete();
        return response()->json(null, 204);
    }
}
