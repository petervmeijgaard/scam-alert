<?php

namespace App\Events\FacebookScammer;

use App\Events\BaseEvent as Event;
use App\Models\FacebookScammer;
use App\Transformers\FacebookScammerTransformer;
use Illuminate\Broadcasting\Channel;

abstract class FacebookScammerBase extends Event
{
    /**
     * @var FacebookScammer The Facebook scammer that has been updated.
     */
    public $facebookScammer;

    /**
     * @var FacebookScammerTransformer The transformer used to transform the Facebook scammer.
     */
    protected $transformer;

    /**
     * Create a new event instance.
     *
     * @param FacebookScammer $facebookScammer The Facebook scammer that has been updated.
     */
    public function __construct(FacebookScammer $facebookScammer)
    {
        $this->facebookScammer = $facebookScammer;
        $this->transformer = new FacebookScammerTransformer();
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

    /**
     * The data being broadcasted.
     *
     * @return mixed[] The items being broadcasted.
     */
    public function broadcastWith()
    {
        return $this->transformer->transform($this->facebookScammer);
    }
}
