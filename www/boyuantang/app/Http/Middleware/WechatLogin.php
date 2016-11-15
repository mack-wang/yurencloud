<?php

namespace App\Http\Middleware;

use Closure;

class WechatLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!session('shop')){
            return redirect('wechat/login');
        }
        return $next($request);
    }
}
