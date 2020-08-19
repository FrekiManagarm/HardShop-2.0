<?php

use App\Boitier;
use App\Carte_Mere;
use App\Cooling;
use App\CPU;
use App\HDD;
use App\PSU;
use App\RAM;
use App\SSD;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/Boitiers', function () {
    $boitier = Boitier::all();
    return response()->json($boitier);
});

Route::get('/CPUs', function () {
    $cpu = CPU::all();
    return response()->json($cpu);
});

Route::get('/Carte_Mere', function () {
    $mb = Carte_Mere::all();
    return response()->json($mb);
});

Route::get('/Cooling', function () {
    $cool = Cooling::all();
    return response()->json($cool);
});

Route::get('/HDD', function () {
    $hdd = HDD::all();
    return response()->json($hdd);
});

Route::get('/PSU', function () {
    $psu = PSU::all();
    return response()->json($psu);
});

Route::get('/RAM', function () {
    $ram = RAM::all();
    return response()->json($ram);
});

Route::get('/SSD', function () {
    $ssd = SSD::all();
    return response()->json($ssd);
});

Route::post('/register', 'AuthenticationController@register');
Route::post('/login', 'AuthenticationController@login');
