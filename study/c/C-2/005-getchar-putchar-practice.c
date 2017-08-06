#include <stdio.h>

main(){
    int name,age,job;//这里本应该是char，但是我们不知道用户会输入什么，所以要保证其尽可能大，所以使用了int

    //交互式问答
    printf("你叫什么名字？");
    name = getchar();
    printf("你的年龄是多少？");
    age = getchar();
    printf("你的工作是什么？");
    job = getchar();
    putchar(name);
    putchar(age);
    putchar(job);
}

//getchar()获取用户输入的值并返回，赋值给c
//putchar()把c接收的用户输入进行输出