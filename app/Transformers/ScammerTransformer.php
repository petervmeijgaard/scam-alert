<?php

namespace App\Transformers;

use App\Transformers\BaseTransformer as Transformer;

class ScammerTransformer extends Transformer
{
    /**
     * {@inheritdoc}
     */
    public function transform($scammer) : array
    {
        return [
            'id'          => (int) $scammer->id,
            'first_name'  => $scammer->first_name,
            'last_name'   => $scammer->last_name,
        ];
    }
}
