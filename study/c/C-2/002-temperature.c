#include <stdio.h>
//打印华氏温度与摄氏温度
/*
c里面的数据类型
int
float
char 字符——一个字节
short 短整型
long 长整型
double

*/
main(){
    int fahr,celsius;
    int lower,upper,step;

    lower = 0;
    upper = 300;
    step = 20;

    fahr = lower;
    while (fahr <= upper){
        celsius = 5*(fahr-32)/9;
        printf("%d\t%d\n",fahr,celsius);//每个%号后是一个参数，%d代表整型，\t代表空格  %d 代表整型 \n代表换行
        fahr = fahr + step;
    }
}
//printf参数说明
/*
%d 整型
%6d 6字符宽的整型
%f 浮点数
%6f 6字符宽的浮点数
%.2f 保留2位小数的浮点数
%6.2f 6字符宽的保留2位小数的浮点数%o表示8进制，%x表示十六进制，%c表示字符，%s表示字符串，%%表示百分号本身
*/




// 整型相除，结果会进行舍入成为整型。浮点数相除不会舍入
