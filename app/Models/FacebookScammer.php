<?php

namespace App\Models;

use App\Events\FacebookScammer\Created;
use App\Events\FacebookScammer\Deleted;
use App\Events\FacebookScammer\Updated;
use App\Models\BaseModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class FacebookScammer extends Model
{
    use Searchable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array The fillable fields.
     */
    protected $fillable = [
        'facebook_id',
        'first_name',
        'last_name',
    ];

    /**
     * The event map for the model.
     *
     * Allows for object-based events for native Eloquent events.
     *
     * @var array The event mapping.
     */
    protected $events = [
        'created' => Created::class,
        'updated' => Updated::class,
        'deleted' => Deleted::class,
    ];
}
