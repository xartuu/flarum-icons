<?php namespace Fajuu\Icons\Api\Controllers;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Fajuu\Icons\Models\Icon;

class ListIconsController extends AbstractListController
{
  public $serializer = 'Fajuu\Icons\Api\Serializers\IconSerializer';

  protected function data(ServerRequestInterface $request, Document $document)
  {
    return Icon::all();
  }
}
