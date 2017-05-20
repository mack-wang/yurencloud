#include <stdio.h>
#include <string.h>


int main(){

    //若x0=0x11,则是大端; 若x0=0x22,则是小端
    short int x;
    char x0,x1;
    x=0x1122;

    x0=*((char*)&x); //低地址单元 ,或者((char*)&x)[0];
    x1=*((char*)&x + 1); //高地址单元,或者((char*)&x)[1];

    if(x0 == 0x11)
        printf("我是大端机器");
    if(x0 == 0x22)
        printf("我是小端机器");
    return 0;
}
