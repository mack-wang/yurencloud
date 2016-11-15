<?php

namespace App\Http\Controllers\Service;

use App\Tool\Validate\ValidateCode;

use App\Http\Controllers\Controller;

use App\Tool\SMS\Sms;


class ValidateCodeController extends Controller
{
    public function create($value = '')
    {
        $validateCode = new ValidateCode;
        return $validateCode->doimg();
    }

    public function sendMessage(){
        $send = new Sms;
        return $send->message();
    }

}
