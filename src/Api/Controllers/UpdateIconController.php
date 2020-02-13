<?php

namespace Fajuu\Icons\Api\Controllers;

use Fajuu\Icons\Commands\EditIcon;
use Flarum\Api\Controller\AbstractShowController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class UpdateIconController extends AbstractShowController
{
    public $serializer = 'Fajuu\Icons\Api\Serializers\IconSerializer';

    protected $bus;

    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $id = array_get($request->getQueryParams(), 'id');
        $actor = $request->getAttribute('actor');
        $data = $request->getParsedBody();

        return $this->bus->dispatch(new EditIcon($id, $actor, $data));
    }
}
