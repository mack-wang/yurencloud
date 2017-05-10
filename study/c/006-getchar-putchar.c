#include <stdio.h>

main(){
    int nc;

    nc=0;
    while(getchar() != EOF){
        ++nc;
        printf("%1d\n",nc);
    }
}

//getchar()获取用户输入的值并返回，赋值给c
//putchar()把c接收的用户输入进行输出