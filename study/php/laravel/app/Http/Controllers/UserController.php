<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticle;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    //自动创建验证
    public function check(Request $request)
    {
        $this->validate($request, [
            'user' => 'required|max:6',
        ]);
        return view('validate')->with('success', '验证成功');
    }

    //手动创建验证，以下仅做参考，没有实际作用
    public function store()
    {
        if ($input = Input::except('_token')) {
            $rules = [
                'group_id' => 'required',
                'shop_name' => 'required|between:1,50',
                'shop_phone' => 'required|regex:/^1[34578][0-9]{9}$/',
                'shop_number' => 'required|numeric|min:6',
                'shop_owner_name' => 'between:2,6',
                'shop_note' => 'between:0,200',
            ];
            $message = [
                'group_id.required' => '所属地区不能为空！',
                'shop_name.required' => '店铺名称不能为空！',
                'shop_name.between' => '店铺名称长度为1-50个字符！',
                'shop_phone.required' => '手机号不能为空！',
                'shop_phone.between' => '请确认手机号长度是否为11位！',
                'shop_phone.numeric' => '手机号格式不正确！',
                'shop_phone.regex' => '手机号格式不正确！',
                'shop_number.required' => '烟草证号不能为空！',
                'shop_number.min' => '请确认烟草证码位数是否正确！',
                'shop_number.numeric' => '烟草证号格式不正确！',
                'shop_owner_name.between' => '名字应为2-6个中文字符！',
                'shop_note.between' => '备注上限为200个字符！',
            ];
            $input = array_filter($input);
            $validator = Validator::make($input, $rules, $message);
            if ($validator->passes()) {
                $result = User::create($input);
                if ($result) {
                    $errors = "添加店铺成功!";
                } else {
                    $errors = "添加店铺失败!";
                }
                $group = User::get();
                return back()->with('errors', $errors)->with('group', $group);
            } else {
                return back()->withErrors($validator);
            }
        } else {
            return view('admin/shop/create');
        }
    }

    //使用模板式的验证规则，在http/requests下的StoreArticle.php下定义
    public function check2(StoreArticle $request)
    {
        return view('validate')->with('success', '验证成功');
    }
}
