#include <stdio.h>
#include <string.h>

typedef unsigned char *byte_pointer;

void show_bytes(byte_pointer start,int len){
    int i;
    for (i=0;i<len;i++){
        //显示为保留前面2位的16进制数
        printf("%.2x",start[i]);
    }
    printf("\n");
}

void show_int(int x){
    show_bytes((byte_pointer) &x,sizeof(int));
}

void show_float(float x){
    show_bytes((byte_pointer) &x, sizeof(float));
}

void show_pointer(void *x){
    show_bytes((byte_pointer) &x, sizeof(void *));
}

void show_short(short x){
    show_bytes((byte_pointer) &x, sizeof(short));
}

void show_long(long x){
    show_bytes((byte_pointer) &x, sizeof(long));
}

void show_double(double x){
    show_bytes((byte_pointer) &x, sizeof(double));
}

int main(){
    int ival = 12345;
    float fval = (float) ival;
    int *pval = &ival;
    show_int(ival);
    show_float(fval);
    show_pointer(pval);

    //我的测试
    short s = 5555;
    long l = 1243454566734;
    double d = 12.234;
    show_short(s);//两个字节长
    show_long(l);
    show_double(d);
    printf("%d", sizeof(short));
    printf("%d", sizeof(int));
    printf("%d", sizeof(long));
    printf("%d", sizeof(float));
    printf("%d", sizeof(double));

    return 0;
}

