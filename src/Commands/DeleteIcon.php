<?php namespace Fajuu\Icons\Commands;
#
use Flarum\User\User;
#
class DeleteIcon
{
  #
  #
  public $iconId;
  public $actor;
  public $data;
  #
  #
  public function __construct($iconId, User $actor, array $data = [])
  {
    #
    $this->iconId = $iconId;
    $this->actor = $actor;
    $this->data = $data;
    #
  }
  #
  #
}