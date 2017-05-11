#include <stdio.h>
#include <string.h>
//使用上述显示声明strlen()

int main(){
    char c[] = "hello";
    printf("%lu",strlen(c));//使用%lu打印长整型
    return 0;
}