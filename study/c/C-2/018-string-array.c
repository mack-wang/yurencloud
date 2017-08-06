#include <stdio.h>

int main(){
    char *name[5] = {"tom","linda","cindy","bob","mack"};
    int i;
    for(i=0;i<5;i++){
        printf("%c",*name[i]);
    }

}