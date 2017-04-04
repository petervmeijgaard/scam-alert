<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController as Controller;
use App\Models\Scammer;
use App\Transformers\ScammerTransformer;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Input;

class ScammersController extends Controller
{
    /**
     * @var ScammerTransformer The transformer used to transform the model.
     */
    protected $transformer;

    /**
     * The constructor for the controller.
     *
     * @param ScammerTransformer $transformer The transformer used to transform the model.
     */
    public function __construct(ScammerTransformer $transformer)
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

        $pagination = Scammer::paginate($this->getPagination());
        $scammers = $this->transformer->transformCollection(collect($pagination->items()));

        return $this->respondWithPagination($pagination, [
            'data' => $scammers,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Scammer $scammer The scammer.
     *
     * @return JsonResponse The result in a JSON-response.
     */
    public function show(Scammer $scammer) : JsonResponse
    {
        return $this->respond($this->transformer->transform($scammer));
    }
}
