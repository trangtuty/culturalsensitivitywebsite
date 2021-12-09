<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Patient;

class PatientController extends Controller
{
    //
    public function index()
    {
        return Patient::all();
    }

    public function show(Patient $patient)
    {
        return $patient;
    }

    public function store(Request $request)
    {
        $patient = Patient::create($request->all());

        return response()->json($Patient, 201);
    }

    public function update(Request $request, Patient $Patient)
    {
        $patient->update($request->all());

        return response()->json($Patient, 200);
    }

    public function delete(Patient $Patient)
    {
        $patient->delete();

        return response()->json(null, 204);
    }
}
