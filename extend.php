<?php namespace Fajuu\Icons;

use Flarum\Extend\Frontend;
use Flarum\Frontend\Document;
use Flarum\Extend\Routes;
use Fajuu\Icons\Api\Controllers;
use Flarum\Extend\Locales;
use Illuminate\Contracts\Events\Dispatcher;

return [
  (new Frontend('forum'))->js(__DIR__ . '/js/dist/forum.js')->content(function (Document $document) {
    if (app('flarum.settings')->get('fajuu-icons.key')) {
      $document->head[] = '<script src="https://kit.fontawesome.com/' . app('flarum.settings')->get('fajuu-icons.key') . '.js"></script>';
    }
  }),

  (new Frontend('admin'))
    ->css(__DIR__ . '/resources/less/IconsPage.less')
    ->js(__DIR__ . '/js/dist/admin.js')
    ->content(function (Document $document) {
      if (app('flarum.settings')->get('fajuu-icons.key')) {
        $document->head[] = '<script src="https://kit.fontawesome.com/' . app('flarum.settings')->get('fajuu-icons.key') . '.js"></script>';
      }
    }),

  (new Routes('api'))
    ->get('/icons', 'icons.index', Controllers\ListIconsController::class)
    ->post('/icons', 'icons.create', Controllers\CreateIconController::class)
    ->patch('/icons/{id}', 'icons.update', Controllers\UpdateIconController::class)
    ->delete('/icons/{id}', 'icons.delete', Controllers\DeleteIconController::class),

  new Locales(__DIR__ . '/resources/locale'),

  function (Dispatcher $events) {
    $events->subscribe(Listeners\AddRelationships::class);
  }
];
