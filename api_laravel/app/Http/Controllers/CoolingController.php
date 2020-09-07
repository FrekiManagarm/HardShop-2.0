<?php

namespace App\Http\Controllers;

use App\Cooling;
use Illuminate\Http\Request;

class CoolingController extends Controller
{
    public function index()
    {
        return Cooling::all();
    }

    public function show(Cooling $cooling)
    {
        return $cooling;
    }

    public function store(Request $request)
    {
        $cooling = Cooling::create($request->all());

        return response()->json($cooling, 201);
    }

    public function update(Request $request, Cooling $cooling)
    {
        $cooling->update($request->all());

        return response()->json($cooling, 200);
    }

    public function delete(Cooling $cooling)
    {
        $cooling->delete();
        return response()->json(null, 204);
    }
}
