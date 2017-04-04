<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticle extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|max:10',
            'id' => 'required',
        ];
    }

    /**
     * 获取被定义验证规则的错误消息.
     *
     * @return array
     * @translator laravelacademy.org
     */
    public function messages(){
        return [
            'title.max' => '标题不能超过10个字呀wlc',
            'id.required'  => '亲，你少了id',
        ];
    }
}
