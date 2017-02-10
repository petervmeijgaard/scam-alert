<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\Models\Scammer::class, function (Faker\Generator $faker) {
    return [
        'first_name'  => $faker->firstName,
        'last_name'   => $faker->lastName,
    ];
});
