#include <stdio.h>

int main() {
    //001-有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数
    /*int i, j, k;
    int n=0;
    for (i = 1; i < 5; i++) {
        for (j = 1; j < 5; j++) {
            for (k = 1; k < 5; k++) {
                if (i != j && i != k && j != k) {
                    n++;
                    printf("%d%d%d\n", i, j, k);
                }
            }
        }
    }
    printf("总共有%d个符合条件的三位数",n);*/

    /*002
    利润(I)低于或等于10万元时，奖金可提10%；
    利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；
    20万到40万之间时，高于20万元的部分，可提成5%；
    40万到60万之间时高于40万元的部分，可提成3%；
    60万到100万之间时，高于60万元的部分，可提成1.5%；
    高于100万元时，超过100万元的部分按1%提成。
     */
 /*   double bonus = 0;
    int profit;
    scanf("%d", &profit);//整数的扫描要加&获取地址
    if (profit <= 10)
        bonus = profit * 0.1;
    if (profit>10 && profit<=20)
        bonus = 1+(profit-10)*0.075;
    if (profit >20 && profit <=40)
        bonus = 1+0.75+(profit-20)*0.05;
    if (profit >40 && profit <=60)
        bonus = 1+0.75+1+(profit-40)*0.03;
    if (profit >60 && profit <=100)
        bonus = 1+0.75+1+0.6+(profit-40)*0.015;
    if (profit >100)
        bonus = 1+0.75+1+0.6+0.6+(profit-100)*0.01;
    printf("%.2f",bonus);*/

    //003-输入三个整数x,y,z，请把这三个数由小到大输出。
 /*   int x,y,z;
    scanf("%d",&x);
    scanf("%d",&y);
    scanf("%d",&z);
    if(x>y){
        if(y>z){
            printf("%d %d %d",x,y,z);
        }else if(x>z){
            printf("%d %d %d",x,z,y);
        }else{
            printf("%d %d %d",z,x,y);
        }
    }else{
        if(x>z){
            printf("%d %d %d",y,x,z);
        }else if(y>z){
            printf("%d %d %d",y,z,x);
        }else{
            printf("%d %d %d",z,y,z);
        }
    }*/



    return 0;
}