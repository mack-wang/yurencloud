#include <stdio.h>

#define IN 1
#define OUT 0

int main(){
    int c,nl,nw,nc,state;

    state = OUT;
    nl = nw = nc = state =0;
    while((c=getchar()) != EOF){
    ++nc;
        if(c == '\n')
            ++nl;
        if(c == ' '||c=='\n'||c=='\t')
            state = OUT;
        else if(state == OUT){
            state = IN;
            ++nw;
        }
    }
    printf("%d %d %d\n",nl,nw,nc);

}

//\n换行符也是特殊字符，他是一个整体，仅代表1个字符，其在字符集中的值为10
//所以统计用户输入了多少行，只要统计他输入的换行符有多少个就可以了

/*
空白符的含义模糊，通常是指空格' '，其ASCII码为32。
制表符为'\t'，相当于4个或8个空格符，其ASCII码为9。
换行符为'\n'，作用是将光标移至下一行，其ASCII码为10。

此外，还有回车'\r'，作用是让光标移至行首，其ASCII码为13。
Windows下换行是\n\r，Unix系统下是\n。
除了水平制表符'\t'，还有垂直制表符'\v'，这个转义字符只有在打印机中才能显示出来，显示屏不起作用的，其ACSII码为11。

*/

//有版本问题，跳过