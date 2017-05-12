#include <stdio.h>

 void mystrcpy();

 int main()
 {
    char *a = "hello";
    char *b[6];
    mystrcpy(*b,*a);
    printf("%s",*b);
    return 0;
 }

void mystrcpy(char *s,char *t)
 {
    int i;
    i=0;
    while((*s=*t)!='\0'){
        s++;
        t++;
    }
 }