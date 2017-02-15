//包是在模块的基础上更深一步的抽象，类似于c/c++的函数库，或者java的类库。它将某个独立的功能封装起来，用于发布、更新、依赖管理和版本控制，能过npm来解决包的发布和获取需求。

/*
Node的包是一个目录，其中包含一个json格式的说明文件package.json。严格符合CommonJS规范的包应该具备以下特征：
1、package.json必须在包的顶层目录下
2、二进制文件应该在bin目录下；
3、javascript代码应该在lib目录下
4、文档应该在doc目录下
5、单元测试应该在test目录下
虽然Node要求没CommonJS严格，但我们最好按严格规范来。


 package.jso文件使我们可以创建更复杂、更完善、更符合规范的包用于发布
 原先我们创建了一个
 myPackage文件夹，并在里面创建了一个index.js，exports出一个hello函数
 可以像引入模块一样，直接引入包，并使用

 同样的，我们可以把index.js改名为interface.js并移入新创建的lib文件夹内，在myPackage下创建package.js
 {
    "main":"./lib/interface.js"
 }
 效果同上

*/

/*
 package.json 是 CommonJS 规定的用来描述包的文件，完全符合规范的 package.json 文 件应该含有以下字段。
  name:包的名称，必须是唯一的，由小写英文字母、数字和下划线组成，不能包含 空格。
  description:包的简要说明。
  version:符合语义化版本识别1规范的版本字符串。
  keywords:关键字数组，通常用于搜索。
  maintainers:维护者数组，每个元素要包含 name、email (可选)、web (可选)
 字段。
  contributors:贡献者数组，格式与maintainers相同。包的作者应该是贡献者
 数组的第一个元素。
  bugs:提交bug的地址，可以是网址或者电子邮件地址。
  licenses:许可证数组，每个元素要包含 type (许可证的名称)和 url (链接到许可证文本的地址)字段。
  repositories:仓库托管地址数组，每个元素要包含 type(仓库的类型，如 git )、 9
 url (仓库的地址)和 path (相对于仓库的路径，可选)字段。
  dependencies:包的依赖，一个关联数组，由包名称和版本号组成。
 下面是一个完全符合 CommonJS 规范的 package.json 示例:

 {
    "name": "mypackage",
    "description": "Sample package for CommonJS. This package demonstrates the required
 elements of a CommonJS package.",
    "version": "0.7.0",
    "keywords": [
        "package",
        "example" ],
    "maintainers": [
        {
            "name": "Bill Smith",
            "email": "bills@example.com",
        }
        ],
    "contributors": [
        {
            "name": "BYVoid",
            "web": "http://www.byvoid.com/"
        } ],
     "bugs": {
            "mail": "dev@example.com",
             "web": "http://www.example.com/bugs"
         },
 "licenses": [
        {
            "type": "GPLv2",
            "url": "http://www.example.org/licenses/gpl.html"
            } ],
 "repositories": [
    {
        "type": "git",
        "url": "http://github.com/BYVoid/mypackage.git"
     }],
 "dependencies": {
 "webkit": "1.2",
 "ssl": {
 "gnutls": ["1.0", "2.0"],
 "openssl": "0.9.8"
 }
 } }
*/


