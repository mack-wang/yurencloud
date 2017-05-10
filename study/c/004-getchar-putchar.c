#include <stdio.h>

main(){
    int c;//这里本应该是char，但是我们不知道用户会输入什么，所以要保证其尽可能大，所以使用了int
    while((c=getchar())!=EOF){//EOF end of file 表示文件结束
        putchar(c);
    }
}

//getchar()获取用户输入的1个字符值并返回，赋值给c
//putchar()把c接收的用户输入进行输出