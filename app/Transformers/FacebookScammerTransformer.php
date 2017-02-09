<?php

namespace App\Transformers;

use App\Transformers\BaseTransformer as Transformer;

class FacebookScammerTransformer extends Transformer
{
    /**
     * {@inheritdoc}
     */
    public function transform($facebookScammer) : array
    {
        return [
            'id'          => (int) $facebookScammer->id,
            'facebook_id' => (int) $facebookScammer->facebook_id,
            'first_name'  => $facebookScammer->first_name,
            'last_name'   => $facebookScammer->last_name,
        ];
    }
}
