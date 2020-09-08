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

Route::get('/Boitiers', 'BoitierController@index');
Route::get('/Boitiers/{Boitier}', 'BoitierController@show');
Route::post('/Boitiers', 'BoitierController@store');
Route::put('/Boitiers/{Boitier}', 'BoitierController@update');
Route::delete('/Boitiers/{Boitier}', 'BoitierController@delete');

Route::get('/CarteMeres', 'CarteMereController@index');
Route::get('/CarteMeres/{CarteMere}', 'CarteMereController@show');
Route::post('/CarteMeres', 'CarteMereController@store');
Route::put('/CarteMeres/{CarteMere}', 'CarteMereController@update');
Route::delete('CarteMeres/{CarteMere}', 'CarteMereController@delete');

Route::get('/Coolings', 'CoolingController@index');
Route::get('/Coolings/{Cooling}', 'CoolingController@show');
Route::post('/Coolings', 'CoolingController@store');
Route::put('/Coolings/{Cooling}', 'CoolingController@update');
Route::delete('/Coolings/{Cooling}', 'CoolingController@delete');

Route::get('/CPUs', 'CPUController@index');
Route::get('/CPUs/{CPU}', 'CPUController@show');
Route::post('/CPUs', 'CPUController@store');
Route::put('/CPUs/{CPU}', 'CPUController@update');
Route::delete('/CPUs/{CPU}', 'CPUController@delete');

Route::get('/GPUs', 'GPUController@index');
Route::get('/GPUs/{GPU}', 'GPUController@show');
Route::post('/GPUs', 'GPUController@store');
Route::put('/GPUs/{GPU}', 'GPUController@update');
Route::delete('/GPUs/{GPU}', 'GPUController@delete');

Route::get('/HDDs', 'HDDController@index');
Route::get('/HDDs/{HDD}', 'HDDController@show');
Route::post('/HDDs', 'HDDController@store');
Route::put('/HDDs/{HDD}', 'HDDController@update');
Route::delete('/HDDs/{HDD}', 'HDDController@delete');

Route::get('/OSs', 'OSController@index');
Route::get('/OSs/{OS}', 'OSController@show');
Route::post('/OSs', 'OSController@store');
Route::put('/OSs/{OS}', 'OSController@update');
Route::delete('/OSs/{OS}', 'OSController@delete');

Route::get('/PSUs', 'PSUController@index');
Route::get('/PSUs/{PSU}', 'PSUController@show');
Route::post('/PSUs/{PSU}', 'PSUController@store');
Route::put('/PSUs/{PSU}', 'PSUController@update');
Route::delete('/PSUs/{PSU}', 'PSUController@delete');

Route::get('/RAMs', 'RAMController@index');
Route::get('/RAMs/{RAM}', 'RAMController@show');
Route::post('/RAMs', 'RAMController@store');
Route::put('/RAMs/{RAM}', 'RAMController@update');
Route::delete('/RAMs/{RAM}', 'RAMController@delete');

Route::get('/SSDs', 'SSDController@index');
Route::get('/SSDs/{SSD}', 'SSDController@show');
Route::post('/SSDs/{SSD}', 'SSDController@store');
Route::put('SSDs/{SSD}', 'SSDController@update');
Route::delete('SSDs/{SSD}', 'SSDController@delete');


Route::post('/register', 'AuthenticationController@register');
Route::post('/login', 'AuthenticationController@login');
