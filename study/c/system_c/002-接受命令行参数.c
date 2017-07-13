#include <stdio.h>

int main(int argc, char *argv[]){
    int i;
    printf("你一共传入了%d个参数\n",argc-1);
    for(i=1;i<argc;i++){
        printf("你的第%d个参数是：%s\n",i,argv[i]);
    }
    return 0;
}