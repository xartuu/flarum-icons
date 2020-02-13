<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->create('icons', function (Blueprint $table) {
            $table->increments('id');
            $table->string('element_path');
            $table->string('original_icon')->nullable();
            $table->string('modified_icon');
            $table->boolean('is_active')->default(1);
        });
    },

    'down' => function (Builder $schema) {
        $schema->drop('icons');
    },
];
