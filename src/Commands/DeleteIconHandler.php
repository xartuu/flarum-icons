<?php

namespace Fajuu\Icons\Commands;

use Fajuu\Icons\Models\Icon;

class DeleteIconHandler
{
    public function handle(DeleteIcon $command)
    {
        $actor = $command->actor;
        $actor->assertAdmin();

        $icon = Icon::where('id', $command->iconId)->first();
        $icon->delete();
    }
}
