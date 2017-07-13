//
// Created by 王乐城 on 5/15/17.
//.h为头文件，.c为源文件，其实两者都是代码，为什么要做这样的区分呢？
// 主要有几点好处：一是头文件用于共享，只用一句#include就能包含，当然.c也可以包含；
// 二是如果你要写库的话，可是你又不想暴露你的源代码，你可以把.c编译成.obj或是.lib发给别人用，然后把.h作为使用说明书。
// 所以一般情况下，.h里面全部都是声明，.c里面全部都是实现，有了.h就可以编译，有了.lib或你的.obj就可以连接
//

#ifndef LOVE_STORY_HELLO_H
#define LOVE_STORY_HELLO_H
void hello(const char* name);
#endif //LOVE_STORY_HELLO_H
