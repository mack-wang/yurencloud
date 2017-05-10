#include <stdio.h>

int main(){
    int c,nl;
    nl=0;
    while((c=getchar())!=EOF){
        if(c=='\n'){
            ++nl;
        }
        printf("%d\n",nl);
    }
}

//\n换行符也是特殊字符，他是一个整体，仅代表1个字符，其在字符集中的值为10
//所以统计用户输入了多少行，只要统计他输入的换行符有多少个就可以了