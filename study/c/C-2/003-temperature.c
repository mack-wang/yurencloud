#include <stdio.h>

//在程序中直接使用重复的关键数字"幻数"不好，应该将其定义为常量或者变量，提高可读性
//一般常量用大写，结尾不用写分号
#define LOWER 0 //表的下限
#define UPPER 300 //表的上限
#define STEP 20  //步长

main(){
    int fahr;
    for(fahr = LOWER; fahr <= UPPER; fahr = fahr+STEP){
        printf("%3d %6.1f\n",fahr,(5.0/9.0)*(fahr-32));
    }
}