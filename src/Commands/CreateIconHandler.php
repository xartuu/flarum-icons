<?php

namespace Fajuu\Icons\Commands;

use Fajuu\Icons\Models\Icon;
use Fajuu\Icons\Validators\IconValidator;
use Illuminate\Support\Arr;

class CreateIconHandler
{
    protected $validator;

    public function __construct(IconValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(CreateIcon $command)
    {
        $actor = $command->actor;
        $data = Arr::get($command->data, 'data.attributes') ?? $command->data;

        $actor->assertAdmin();

        $icon = Icon::build(
            Arr::get($data, 'elementPath'),
            Arr::get($data, 'originalIcon'),
            Arr::get($data, 'modifiedIcon'),
            1 // isActive
        );

        $this->validator->assertValid($icon->getAttributes());

        $icon->save();

        return $icon;
    }
}
