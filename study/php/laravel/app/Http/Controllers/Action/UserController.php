<?php

namespace App\Http\Controllers\Action;

use App\Http\Controllers\Controller;
use App\User;

class UserController extends Controller
{
    public function __invoke($id)
    {
        return view('action', ['user' => User::findOrFail($id)]);
    }
}
