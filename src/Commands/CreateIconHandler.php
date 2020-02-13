<?php

namespace Fajuu\Icons\Commands;

use Fajuu\Icons\Models\Icon;
use Fajuu\Icons\Validators\IconValidator;
use Flarum\User\AssertPermissionTrait;

class CreateIconHandler
{
    use AssertPermissionTrait;

    protected $validator;

    public function __construct(IconValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(CreateIcon $command)
    {
        $actor = $command->actor;
        $data = array_get($command->data, 'data.attributes') ?? $command->data;

        $this->assertAdmin($actor);

        $icon = Icon::build(
      array_get($data, 'elementPath'),
      array_get($data, 'originalIcon'),
      array_get($data, 'modifiedIcon'),
      1 // isActive
    );

        $this->validator->assertValid($icon->getAttributes());

        $icon->save();

        return $icon;
    }
}
