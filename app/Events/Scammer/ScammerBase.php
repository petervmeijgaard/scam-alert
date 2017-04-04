<?php

namespace App\Events\Scammer;

use App\Events\BaseEvent as Event;
use App\Models\Scammer;
use App\Transformers\ScammerTransformer;
use Illuminate\Broadcasting\Channel;

abstract class ScammerBase extends Event
{
    /**
     * @var Scammer The scammer that has been updated.
     */
    public $scammer;

    /**
     * @var ScammerTransformer The transformer used to transform the scammer.
     */
    protected $transformer;

    /**
     * Create a new event instance.
     *
     * @param Scammer $scammer The scammer that has been updated.
     */
    public function __construct(Scammer $scammer)
    {
        $this->scammer = $scammer;
        $this->transformer = new ScammerTransformer();
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return Channel|array The broadcast channels.
     */
    public function broadcastOn()
    {
        return ['scammer'];
    }

    /**
     * The data being broadcasted.
     *
     * @return mixed[] The items being broadcasted.
     */
    public function broadcastWith()
    {
        return $this->transformer->transform($this->scammer);
    }
}
