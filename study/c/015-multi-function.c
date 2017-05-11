#include <stdio.h>
#define MAXLINE 1000 /*最大的行数*/

/*初始化定义函数*/
int getline();
int strindex();

char pattern[]="ould";/*待查找的模式*/

int main(){
    char line[MAXLINE];
    int found = 0;
    while( getline(line,MAXLINE) >0)
        if(strindex(line,pattern)>=0){
            printf("%s",line);
            found++;
        }
        return found;
}

int getline(char s[],int lim)
{
    char c;
    int i;
    i=0;
    while(--lim>0 && (c=getchar())!=EOF && c !='\n')
        s[i++]=c;
        if(c=='\n')
            s[i++]=c;
            s[i]='\0';
            return i;
}

int strindex(char s[],char t[])
{
    int i,j,k;
    for(i=0;s[i]!='\0';i++){
        for(j=i,k=0;t[k]!='\0'&& s[j]==t[k];j++,k++)
        ;
        if(k>0 && t[k]=='\0')
        return i;
    }
    return -1;
}