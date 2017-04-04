<?php
//已经将英语转成中文，但中文中还有想要修改的，只要在下面添加规则就可以，比如哈哈哈哈
return [
    'max' => [
        'numeric' => 'The :attribute may not be greater than :max.',
        'file' => 'The :attribute may not be greater than :max kilobytes.',
        'string' => 'The 哈哈哈哈:attribute may not be greater than :max characters.',
        'array' => 'The :attribute may not have more than :max items.',
    ],
    'custom' => [
        'user' => [
            'max' => '我是语言文件中的custom设置的错误提示，亲爱的用户，你字数超了 :max 个',
        ],
    ],
];
