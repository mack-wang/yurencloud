#include "hello.h"
#include <stdio.h>
#include <float.h>
//用引号的是自己的头文件，尖括号的是标准官方的头文件

extern int globals;//定义全局变量，需要加extern
int main() {
    char boys[] = {'T','B','M'};//在c语言中单引号代表字符（显示为ASCII编码的单个字符），双引号代表字符串
    char boy1, boy2, boy3;//为了让程序的书写更加简洁，C语言支持多个变量的连续定义
    int boy1_age = 21, boy2_age = 22, boy3_age = 34;
    char girl = 'G';
    char girl_name[] = "linda";
    short int sex = 0;
    int age = 23;
    long int phone = 15757130092;
    float money = 5.2;
    double money2 = 5.21;
    char boy1_name[] = "Tom";
    int age_array[] = {21,22,34,23};
    int i;

    //指针
    char *boys_array[3] = {"Tom","Bob","Mack"};
    char *key;//key是键(和地址意思相同)   *key是值   &是获取键的地址 key++地址向下移一位 key+8 地址向下移8位
    char value = 'o';
    key = &value;

    int num1 = 123u;//u为unsigned
    int num2 = 123l;//l为long
    int num3 = 123ul;



    //输出
    //hello
    hello("World");

    //001-数据类型
    printf("%d %c %d %.1f \n",age,girl,boy1_age,money);

    //002-字符串连接,直接把字符串放一起
    printf("mack ""wang""你好\n");
    printf("%s爱%s\n",girl_name,boy1_name);

    //003-数组
    printf("%d\n",age_array[1]);

    //004-for循环打印名字
    for (i=0;i<3;i++){
        printf("%s\n",boys_array[i]);
    }

    //005-输出指针key的value值
    printf("%c\n",*key);

    //006-获取不同类型的数据的当前机器下的存储大小
    printf("int 存储大小 : %lu \n", sizeof(int));

    //007-获取浮点数的参数，FLT_MIN等常量声明在float.h头部文件中有
    printf("float 存储最大字节数 : %lu \n", sizeof(float));
    printf("float 最小值: %E\n", FLT_MIN );
    printf("float 最大值: %E\n", FLT_MAX );
    printf("精度值: %d\n", FLT_DIG );

    //008-定义不同类型的整数
    printf("%d %d %d\n",num1,num2,num3);//输出的时候并不会出现u和l u和l应该是用来拓展数字的存储空间大小的

    /*转义序列
                \'	' 字符
                \"	" 字符
                \?	? 字符
                \a	警报铃声
                \b	退格键
                \f	换页符
                \n	换行符
                \r	回车
                \t	水平制表符
                \v	垂直制表符
                \ooo	一到三位的八进制数
                \xhh . . .	一个或多个数字的十六进制数
     */


    return 0;
}