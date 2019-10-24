<?php namespace Fajuu\Icons\Commands;

use Flarum\User\User;

class CreateIcon
{
  public $actor;
  public $data;

  public function __construct(User $actor, array $data)
  {
    $this->actor = $actor;
    $this->data = $data;
  }
}
