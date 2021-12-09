<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('patients', 'App\Http\Controllers\PatientController@index');
Route::get('patients/{patient}', 'App\Http\Controllers\PatientController@show');
Route::post('patients', 'App\Http\Controllers\PatientController@store');
Route::put('patients/{patient}', 'App\Http\Controllers\PatientController@update');
Route::delete('patients/{patient}', 'App\Http\Controllers\PatientController@delete');