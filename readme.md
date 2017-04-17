# scam-alert
> An open source scam registration platform.

## Frontend
This readme is only meant for the backend.
The readme for the frontend can been found in `resources/assets/frontend`.

## Build Setup
``` bash
# Install dependencies
$ composer install

# Setup your environment and fill in the missing values
# Make sure the Algolia and Pusher configuration is filled in
$ cp .env.example .env
$ php artisan key:generate

# Create and migrate the database
$ php artisan migrate --seed
$ php artisan scout:import 'App\Models\Scammer`
$ php artisan passport:install
```

## Using Homestead with Vagrant
``` bash
# Initialize Homestead
$ ./vendor/bin/homestead make

# Edit Homestead.yaml and .env

# Create and migrate the database
$ php artisan migrate --seed

# Visit localhost:8000 or your custom url
```