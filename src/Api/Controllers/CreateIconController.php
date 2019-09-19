<?php namespace Fajuu\Icons\Api\Controllers;
#
use Flarum\Api\Controller\AbstractCreateController;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Fajuu\Icons\Commands\CreateIcon;
#
class CreateIconController extends AbstractCreateController
{
  #
  #
  public $serializer = "Fajuu\Icons\Api\Serializers\IconSerializer";
  protected $bus;
  #
  #
  public function __construct(Dispatcher $bus)
  {
    #
    $this->bus = $bus;
    #
  }
  #
  #
  #
  protected function data(ServerRequestInterface $request, Document $document)
  {
    #
    return $this->bus->dispatch(
      new CreateIcon($request->getAttribute("actor"), ($request->getParsedBody()))
    );
    #
  }
  #
  #
}