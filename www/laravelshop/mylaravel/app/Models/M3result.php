<?php
/**
 * Created by PhpStorm.
 * User: wanglecheng
 * Date: 10/6/16
 * Time: 11:29
 */
namespace App\Models;

class M3result{
    public $status;
    public $message;

    public function toJson(){
        return json_encode($this, JSON_UNESCAPED_UNICODE);
    }


}