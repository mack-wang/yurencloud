<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;

class ShopCode extends Model
{
    protected $table = "shop_code";
    protected $primaryKey = 'code_id';
    public $timestamps = true;
    protected $guarded = [];
}
