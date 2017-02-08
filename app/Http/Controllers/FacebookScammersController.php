<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController as Controller;
use App\Models\FacebookScammer;
use App\Transformers\FacebookScammerTransformer;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Input;

class FacebookScammersController extends Controller
{
    /**
     * @var FacebookScammerTransformer The transformer used to transform the model.
     */
    protected $transformer;

    /**
     * The constructor for the controller.
     *
     * @param FacebookScammerTransformer $transformer The transformer used to transform the model.
     */
    public function __construct(FacebookScammerTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse The result in a JSON-response.
     */
    public function index() : JsonResponse
    {
        if (Input::get('limit')) {
            $this->setPagination(Input::get('limit'));
        }

        $pagination = FacebookScammer::paginate($this->getPagination());
        $facebookScammers = $this->transformer->transformCollection(collect($pagination->items()));

        return $this->respondWithPagination($pagination, [
            'data' => $facebookScammers,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param FacebookScammer $facebookScammer The Facebook scammer.
     *
     * @return JsonResponse The result in a JSON-response.
     */
    public function show(FacebookScammer $facebookScammer) : JsonResponse
    {
        return $this->respond($this->transformer->transform($facebookScammer));
    }
}
