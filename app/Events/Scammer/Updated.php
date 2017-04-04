<?php

namespace App\Events\Scammer;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Updated extends ScammerBase implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
}
