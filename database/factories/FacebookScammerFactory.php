<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\FacebookScammer::class, function (Faker\Generator $faker) {
    return [
        'first_name'  => $faker->firstName,
        'last_name'   => $faker->lastName,
        'facebook_id' => $faker->numberBetween(),
    ];
});
