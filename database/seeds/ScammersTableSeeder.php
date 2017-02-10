<?php

use App\Models\Scammer;
use Illuminate\Database\Seeder;

class ScammersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Scammer::class, 10)->create();
    }
}
