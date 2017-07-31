package practive;

import java.util.Scanner;

/*
* 定义圆类，它有一个变量radius(半径)。
* 从键盘输入数据，通过构造方法传递给radius，编程计算并输出圆的周长和面积（确保输入的数据不为负数）。
* */
public class Circle {
    private int radius;

    Circle(int radius){
        this.radius = radius;
    }

    public double getLength(){
        return Math.PI*radius*2;
    }

    public double getSquare(){
        return Math.PI*radius*radius;
    }

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);//创建文字输入扫描对象,会发起一个输入
        System.out.println("请输入圆的半径");//这句话会作为上述对象的标题
        Circle c = new Circle(s.nextInt());//接收输入的整型数字对象，若不是整型则报错
        System.out.println(c.getLength());
        System.out.println(c.getSquare());
    }
}
