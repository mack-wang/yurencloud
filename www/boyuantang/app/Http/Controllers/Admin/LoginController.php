<?php
<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Tools\Validate\code\Code;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Input;
use App\Http\Model\Manager;

class LoginController extends Controller
{
    public function login()
    {
        if($input = Input::all()){
            $code = new code;
            $_code = $code -> get();
            if(strtoupper($input['code']) != $_code){
                return back()->with('message','验证码错误');
            }
            $manager = Manager::all()->first();
            if($manager == "" || Crypt::decrypt($manager['password'])!=$input['password'] ){
                return back()->with('message','用户名或密码错误');
            }else{
                session(['manager'=>$manager]);
                return redirect('admin/index');
            }
        }else{
            return view('admin/login');
        }

    }

    public function code()
    {
        $code = new code;
        $code -> make();
        $code -> get();
    }

    public function quit()
    {
        session(['manager'=>null]);
        return redirect('admin/login');
    }
}
