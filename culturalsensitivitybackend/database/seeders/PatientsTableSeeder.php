<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Patient;

class PatientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Patient::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'dob'=>'1943-08-10',
            'contact'=>'0612345678',
            'medicines'=>'AAA,BBB',
            'allergies'=>'peanut',
            'religion'=>'Christianity',
            'favourite_dishes'=>'potatoes',
        ]);
    }
}
