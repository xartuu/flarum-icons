<?php

namespace Fajuu\Icons\Api\Serializers;

use Flarum\Api\Serializer\AbstractSerializer;

class IconSerializer extends AbstractSerializer
{
    protected $type = 'icons';

    protected function getDefaultAttributes($icon)
    {
        return [
            'elementPath'  => $icon->element_path,
            'originalIcon' => $icon->original_icon,
            'modifiedIcon' => $icon->modified_icon,
            'isActive'     => $icon->is_active,
        ];
    }
}
