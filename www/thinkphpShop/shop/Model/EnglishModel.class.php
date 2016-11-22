<?php

namespace Model;
use Think\Model;
/**
* 因为english这个表没有表前缀sw_所以要单独为他定义
*/
class EnglishModel extends Model
{
	protected $trueTableName = 'english';
}