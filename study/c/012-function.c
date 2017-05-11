#include <stdio.h>

#define IN 1
#define OUT 0

int my_sum();//函数在使用前需要初始化定义

int main(){
    int a,b;
    a=10;
    b=2;
    printf("%s %d %d\n","求和",my_sum(a,7),my_sum(b,9));
    return 0;
}

int my_sum(int a,int b)
{
    return a+b;
}