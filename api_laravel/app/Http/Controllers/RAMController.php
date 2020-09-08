<?php

namespace App\Http\Controllers;

use App\RAM;
use Illuminate\Http\Request;

class RAMController extends Controller
{
    public function index()
    {
        return RAM::all();
    }

    public function show(RAM $rAM)
    {
        return $rAM;
    }

    public function store(Request $request)
    {
        $rAM = RAM::create($request->all());

        return response()->json($rAM, 201);
    }

    public function update(Request $request, RAM $rAM)
    {
        $rAM->update($request->all());

        return response()->json($rAM, 200);
    }

    public function delete(RAM $rAM)
    {
        $rAM->delete();
        return response()->json(null, 204);
    }
}
