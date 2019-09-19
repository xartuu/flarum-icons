<?php namespace Fajuu\Icons\Models;
#
use Flarum\Database\AbstractModel;
#
class Icon extends AbstractModel
{
  #
  #
  protected $table = "icons";
  #
  #
  public static function build($elementPath, $originalIcon, $modifiedIcon, $isActive)
  {
    #
    $icon = new static();
    
    $icon->element_path = $elementPath;
    $icon->original_icon = $originalIcon;
    $icon->modified_icon = $modifiedIcon;
    $icon->is_active = $isActive;
    
    return $icon;
    #
  }
  #
  #
}