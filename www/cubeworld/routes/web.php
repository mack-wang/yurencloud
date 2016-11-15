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

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('cube.post.post');
});
Route::get('/post', function () {
    return view('cube.post.post');
});
Route::get('/group', function () {
    return view('cube.group.group');
});
Route::get('/rank', function () {
    return view('cube.rank.rank');
});
Route::get('/sponsor', function () {
    return view('cube.sponsor.sponsor');
});
Route::get('/download', function () {
    return view('cube.download.download');
});
Route::get('/teach', function () {
    return view('cube.teach.teach');
});
Route::get('/login', function () {
    return view('cube.login.login');
});
Route::get('/register', function () {
    return view('cube.register.register');
});

Route::post('user/register', 'User\UserController@register');
