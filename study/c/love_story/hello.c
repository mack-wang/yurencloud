#include <stdio.h>
#include "hello.h"

void hello(const char * name)
{
    //%s是占位符，代表后面变量name的值
    printf ("Hello %s! \n", name);
}