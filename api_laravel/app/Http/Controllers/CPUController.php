<?php

namespace App\Http\Controllers;

use App\CPU;
use Illuminate\Cache\Repository;
use Illuminate\Http\Request;

class CPUController extends Controller
{
    public function index()
    {
        return CPU::all();
    }

    public function show(CPU $cPU)
    {
        return $cPU;
    }

    public function store(Request $request)
    {
        $cPU = CPU::create($request->all());

        return response()->json($cPU, 201);
    }

    public function update(Request $request, CPU $cPU)
    {
        $cPU->update($request->all());

        return response()->json($cPU, 200);
    }

    public function delete(CPU $cPU)
    {
        $cPU->delete();
        return response()->json(null, 204);
    }
}
