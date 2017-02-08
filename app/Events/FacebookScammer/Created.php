<?php

namespace App\Events\FacebookScammer;

use App\Events\BaseEvent as Event;
use App\Models\FacebookScammer;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class Created extends Event implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var FacebookScammer The Facebook scammer that has been created.
     */
    public $facebookScammer;

    /**
     * Create a new event instance.
     *
     * @param FacebookScammer $facebookScammer The Facebook scammer that has been created.
     */
    public function __construct(FacebookScammer $facebookScammer)
    {
        $this->facebookScammer = $facebookScammer;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array The broadcast channels.
     */
    public function broadcastOn()
    {
        return ['facebook_scammer'];
    }
}
