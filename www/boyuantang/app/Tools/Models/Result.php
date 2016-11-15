<?php

namespace App\Tools\Models;

class Result {

    public $status;
    public $message;

    public function toJson()
    {
        return json_encode($this, JSON_UNESCAPED_UNICODE);
    }

}
