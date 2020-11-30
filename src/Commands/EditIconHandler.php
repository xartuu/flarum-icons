<?php

namespace Fajuu\Icons\Commands;

use Fajuu\Icons\Models\Icon;
use Fajuu\Icons\Validators\IconValidator;
use Illuminate\Support\Arr;

class EditIconHandler
{
    protected $validator;

    public function __construct(IconValidator $validator)
    {
        $this->validator = $validator;
    }

    public function handle(EditIcon $command)
    {
        $actor = $command->actor;
        $data = Arr::get($command->data, 'data.attributes') ?? $command->data;
        $actor->assertAdmin();
        $icon = Icon::where('id', $command->iconId)->first();

        if (isset($data['elementPath'])) {
            $icon->element_path = $data['elementPath'];
        }
        if (isset($data['originalIcon'])) {
            $icon->original_icon = $data['originalIcon'];
        }
        if (isset($data['modifiedIcon'])) {
            $icon->modified_icon = $data['modifiedIcon'];
        }
        if (isset($data['isActive'])) {
            $icon->is_active = (bool) $data['isActive'];
        }

        $this->validator->assertValid($icon->getDirty());
        $icon->save();

        return $icon;
    }
}
