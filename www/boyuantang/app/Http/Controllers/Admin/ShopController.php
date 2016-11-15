<?php

namespace App\Http\Controllers\Admin;

use App\Http\Model\Group;
use App\Http\Model\Shop;
use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Collection;

class ShopController extends Controller
{
    //get index 店铺列表首页test2
    public function index()
    {
        $shop = Shop::join('group', 'shop.group_id', '=', 'group.group_id')
            ->select('shop.*', 'group.group_name')
            ->paginate(10);
        return view('admin/shop/index')->with('data', $shop);
    }

    //post store 添加店铺
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
                $result = Shop::create($input);
                if ($result) {
                    $errors = "添加店铺成功!";
                } else {
                    $errors = "添加店铺失败!";
                }
                $group = Group::get();
                return back()->with('errors', $errors)->with('group', $group);
            } else {
                return back()->withErrors($validator);
            }
        } else {
            return view('admin/shop/create');
        }
    }

    //get create 到店铺增加页面
    public function create()
    {
        $group = Group::get();
        return view('admin/shop/create')->with('group', $group);
    }

    //get show 单个店铺显示
    public function search()
    {
        $keyword = Input::get('keyword');
        $shop = '';
        if ($keyword) {
            switch ($keyword) {
                case ($keyword{0} == "1" && strlen($keyword) == 11) :
                    $shop = Shop::join('group', 'shop.group_id', '=', 'group.group_id')
                        ->select('shop.*', 'group.group_name')->where('shop_phone', $keyword)->paginate(10);
                    break;
                case ($keyword{0} == "3" && strlen($keyword) == 18) :
                    $shop = Shop::join('group', 'shop.group_id', '=', 'group.group_id')
                        ->select('shop.*', 'group.group_name')->where('shop_phone', $keyword)->paginate(10);
                    break;
                default :
                    $shop = Shop::join('group', 'shop.group_id', '=', 'group.group_id')
                        ->select('shop.*', 'group.group_name')->where('shop_name', 'like', '%' . $keyword . '%')->paginate(10);
            }
        }
        //这里要满足两个条件,$shop是string时不为空,$shop是collection(laravel通过get()获得的就是collection)时不为空
        if ($shop && !$shop->isEmpty()) {
            return view('admin/shop/index')->with('data', $shop);
        } else {
            return back()->with('errors', '未能搜索到相关店铺信息');
        }
    }

    //get edit 进入单个店铺编辑
    public function edit($shop_id)
    {
        $shop = Shop::join('group', 'shop.group_id', '=', 'group.group_id')
            ->select('shop.*', 'group.group_name')
            ->find($shop_id);
        $group = Group::all();
        return view('admin.shop.edit', compact('shop', 'group'));
    }

    //put update 店铺修改更新
    public function update($shop_id)
    {
        $input = Input::except('_token', '_method');
        array_filter($input);
        $result = Shop::where('shop_id', $shop_id)->update($input);
        if ($result) {
            return redirect('admin/shop');
        } else {
            return back()->with('errors', '店铺修改失败，请稍后重试！');
        }
    }

    //delete destroy 单个店铺删除
    public function destroy($shop_id)
    {
        $result = Shop::destroy($shop_id);
        if ($result > 0) {
            $data = [
                'status' => 0,
                'msg' => '店铺删除成功！',
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '店铺删除失败，请稍后重试！',
            ];
        }
        return $data;
    }

    public function delShops()
    {
        $shop_id = Input::get('shop_id');
        $result = Shop::destroy($shop_id);
        if ($result > 0) {
            $data = [
                'status' => 0,
                'msg' => '店铺删除成功！',
            ];
        } else {
            $data = [
                'status' => 1,
                'msg' => '店铺删除失败，请稍后重试！',
            ];
        }
        return $data;
    }


}
