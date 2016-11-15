<?php

namespace App\Http\Controllers\User;

use App\Http\Model\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;
use App\Tools\Models\Result;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register()
    {
        $Json = new Result();
        $input = Input::except(['_token','password_comfirm']);
        $result1 = User::where('user_name', $input['user_name'])->get();
        $result2 = User::where('email', $input['email'])->get();

        if (!$result1) {
            $Json->status = 1;
            $Json->message = "用户名已经被占用";
            return $Json->toJson();
        }

        if (!$result2) {
            $Json->status = 2;
            $Json->message = "邮箱已经注册";
            return $Json->toJson();
        }

        $rules = [
            'user_name' => 'between:3,20',
            'password' => 'between:6,20',
            'email' => 'email',
        ];
        $message = [
            'user_name.between' => '游戏ID长度为3-20个字符！',
            'password.between' => '密码长度为6-20个字符！',
            'email.email' => '邮箱格式不正确！',
        ];
        $input = array_filter($input);
        $validator = Validator::make($input, $rules, $message);

        if ($validator->passes()) {
            $result = User::create($input);
            if ($result) {
                $Json->status = 0;
                return $Json->toJson();
            } else {
                $Json->status = 3;
                $Json->message = '出错了';
                return $Json->toJson();
            }
        }

    }
}
