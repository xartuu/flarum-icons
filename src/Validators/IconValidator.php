<?php namespace Fajuu\Icons\Validators;

use Flarum\Foundation\AbstractValidator;

class IconValidator extends AbstractValidator
{
  protected $rules = [
    'element_path' => ['required', 'unique:icons'],
    'original_icon' => ['required', 'string'],
    'modified_icon' => ['required', 'string'],
    'is_active' => ['boolean']
  ];
}
