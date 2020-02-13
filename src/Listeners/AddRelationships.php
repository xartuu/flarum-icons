<?php

namespace Fajuu\Icons\Listeners;

use Fajuu\Icons\Api\Serializers\IconSerializer;
use Fajuu\Icons\Models\Icon;
use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Event\WillGetData;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\GetApiRelationship;
use Illuminate\Contracts\Events\Dispatcher;

class AddRelationships
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetApiRelationship::class, [$this, 'getApiAttributes']);
        $events->listen(WillSerializeData::class, [$this, 'WillSerializeData']);
        $events->listen(WillGetData::class, [$this, 'includeIconsRelationship']);
    }

    public function getApiAttributes(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'icons')) {
            return $event->serializer->hasMany($event->model, IconSerializer::class, 'icons');
        }
    }

    public function WillSerializeData(WillSerializeData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->data['icons'] = Icon::get();
        }
    }

    public function includeIconsRelationship(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude('icons');
        }
    }
}
