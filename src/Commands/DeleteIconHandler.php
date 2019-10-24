<?php namespace Fajuu\Icons\Commands;

use Flarum\User\AssertPermissionTrait;
use Fajuu\Icons\Models\Icon;
use Flarum\User\Exception\PermissionDeniedException;

class DeleteIconHandler
{
  use AssertPermissionTrait;

  public function handle(DeleteIcon $command)
  {
    $actor = $command->actor;
    $this->assertAdmin($actor);

    $icon = Icon::where('id', $command->iconId)->first();
    $icon->delete();
  }
}
