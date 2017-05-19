#include <stdio.h>
#include <stdlib.h>
#include <string.h>



void print_bin(int n);

int main() {

    //001-进制转换，2进制 10进制 16进制
    int i;
    int type;
    char result[10];
    printf("请输出要转换的数字：\n");
    scanf("%d", &i);
    printf("请输出要转换的类型：\n");
    scanf("%d", &type);

    switch (type) {
        case 2:
            print_bin(i);
            return 0;
        case 8:
            sprintf(result, "%o", i);
            break;
        case 10:
            sprintf(result, "%d", i);
            break;
        case 16:
            sprintf(result, "%x", i);
            break;
    }
    printf("%s", result);
    return 0;
}

void print_bin(int n) {

    int len = sizeof(n) * 8;

    int temp;

    //进行循环取出每一位

    for (int i = 0; i < len; i++) {

        temp = n;

        //每次进行移位

        temp = temp >> (31 - i);

        int t = temp & 1;

        if (i % 4 == 0) {

            printf(" ");

        }

        printf("%d", t);

    }

    printf("\n");

}
