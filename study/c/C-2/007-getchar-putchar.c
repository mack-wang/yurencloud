#include <stdio.h>

int main(){
    char name;
    while((name = getchar()) != EOF){
        printf("%c\n",name);
    }

}

//getchar()从文本流中读入下一个输入字符，并将其作为结果返回
//putchar()每次调用putchar()将打印一个字符

/*
getchar()第一次执行的时候，就会要求用户进行输入，用户按了回车才算是输入完毕，文本输入结束，EOF出现
getchar()只会返回用户输入的第一个字符，如何再次调用会对文本流的下一个进行返回，
getchar()每次只能获取1个字符，但经过while的判断 name=getchar() 不等于 文件结尾EOF 一直成立，所以一直依次获取文本流的字符再结束
putchar()每次调用就会输出1个字符，但因为没有换行符，所以就会让所有的1个字符输出在同一行，此时就让用户造成了输出复制到输出的错觉


*/