<?php

use App\Models\FacebookScammer;
use Illuminate\Database\Seeder;

class FacebookScammersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(FacebookScammer::class, 10)->create();
    }
}
