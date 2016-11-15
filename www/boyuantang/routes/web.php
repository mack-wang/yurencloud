<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::group(['middleware'=>['web']],function(){

    Route::get('/', function () {
        return view('test');
    });

    //后台登入控制器|登入方法
    Route::any('admin/login','Admin\LoginController@login');
    Route::get('admin/code','Admin\LoginController@code');
});

Route::group(['middleware'=>['web','admin.login'],'prefix'=>'admin','namespace'=>'Admin'],function(){
    Route::get('index','IndexController@index');
    Route::get('info','IndexController@info');
    Route::get('quit','LoginController@quit');
    Route::any('password','IndexController@password');
    Route::get('shop/search','ShopController@search');
    Route::post('shop/delShops','ShopController@delShops');
    Route::resource('shop','ShopController');
});

Route::group(['middleware'=>['web']],function(){
    //微信注册登入控制器|登入方法
    Route::any('phone/login', 'Phone\LoginController@login');
    Route::get('phone/send', 'Phone\LoginController@send');
    Route::get('phone/index', 'Phone\LoginController@index');
    Route::get('phone/check', 'Phone\LoginController@send');
    Route::post('phone/code', 'Phone\LoginController@code');
});

Route::group(['middleware'=>['web','phone.login'],'prefix'=>'phone','namespace'=>'Phone'],function(){
    Route::any('demo', 'phoneController@demo');
});





//由于域名备案,和公司官网80端口并开发商占用,导致暂时不能使用微信的相关功能
//所以暂时不在微信上进行开发测试,但会在手机端进行测试
//Route::group(['middleware'=>['web']],function(){
//    //微信注册登入控制器|登入方法
//    Route::any('wechat/login', 'Wechat\LoginController@login');
//    Route::post('wechat/send', 'Wechat\LoginController@send');
//    Route::any('wechat/serve', 'Wechat\WechatController@serve');
//});
//
//Route::group(['middleware'=>['web','wechat.login'],'prefix'=>'wechat','namespace'=>'Wechat'],function(){
//    Route::any('demo', 'WechatController@demo');
//});