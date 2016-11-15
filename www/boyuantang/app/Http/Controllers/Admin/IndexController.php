<?php

namespace App\Http\Controllers\Admin;

use App\Http\Model\Manager;
use Illuminate\Http\Request;

use App\Http\Requests;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class IndexController extends Controller
{
    public function index()
    {
        return view('admin/index');
    }

    public function info()
    {
        return view('admin/info');
    }

    public function password()
    {
        if($input = Input::all()){

            $rules = [
                'password'=>'required|between:6,20|confirmed',
            ];

            $message = [
                'password.required'=>'新密码不能为空！',
                'password.between'=>'新密码必须在6-20位之间！',
                'password.confirmed'=>'新密码和确认密码不一致！',
            ];

            $validator = Validator::make($input,$rules,$message);

            if($validator->passes()){
                $manager = Manager::first();
                $_password = Crypt::decrypt($manager->password);
                if($input['password_o']==$_password){
                    $manager->password = Crypt::encrypt($input['password']);
                    $manager->save();
                    return back()->with('errors','修改密码成功!');
                }else{
                    return back()->with('errors','原密码错误！');
                }
            }else{
                return back()->withErrors($validator);
            }

        }else{
            return view('admin.password');
        }
    }
}
