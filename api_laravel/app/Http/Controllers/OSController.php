<?php

namespace App\Http\Controllers;

use App\OS;
use Illuminate\Http\Request;

class OSController extends Controller
{
    public function index()
    {
        return OS::all();
    }

    public function show(OS $oS)
    {
        return $oS;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            
        ]);

        $oS = OS::create($request->all());

        return response()->json($oS, 201);
    }

    public function update(Request $request, OS $oS)
    {
        $oS->update($request->all());

        return response()->json($oS, 200);
    }

    public function delete(OS $oS)
    {
        $oS->delete();
        return response()->json(null, 204);
    }
}
