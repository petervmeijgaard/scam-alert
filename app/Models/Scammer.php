<?php

namespace App\Models;

use App\Events\Scammer\Created;
use App\Events\Scammer\Deleted;
use App\Events\Scammer\Updated;
use App\Models\BaseModel as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Scammer extends Model
{
    use Searchable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array The fillable fields.
     */
    protected $fillable = [
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
