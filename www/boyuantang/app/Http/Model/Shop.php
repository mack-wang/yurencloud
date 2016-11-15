<?php

namespace App\Http\Model;

use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    protected $table = "shop";
    protected $primaryKey = "shop_id";
    public $timestamps = true;
    protected $guarded = [];

    public function group()
    {
        return $this->hasOne('App\Http\Model\Group', 'group_id', 'group_id');
    }
}
