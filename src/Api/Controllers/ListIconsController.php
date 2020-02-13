<?php

namespace Fajuu\Icons\Api\Controllers;

use Fajuu\Icons\Models\Icon;
use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class ListIconsController extends AbstractListController
{
    public $serializer = 'Fajuu\Icons\Api\Serializers\IconSerializer';

    protected function data(ServerRequestInterface $request, Document $document)
    {
        return Icon::all();
    }
}
