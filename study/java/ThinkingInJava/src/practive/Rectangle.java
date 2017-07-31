package practive;


/*
* 1、定义长方形类，含：

  属性：宽、高（整型）；

  方法：求周长、面积；

  构造方法3个：（1）无参——宽、高默认值为1；（2）1个参数——宽、高均为参数值；（3）2个参数——宽、高各为参数值。

  要求：进行测试。
* */
public class Rectangle {
    private int width, height;

    Rectangle() {
        this.width = 1;
        this.height = 1;
    }

    Rectangle(int width) {
        this.width = width;
        this.height = width;
    }

    Rectangle(int width,int height){
        this.width = width;
        this.height = height;
    }

    public int getLength(){
        return (this.width+this.height)*2;
    }

    public int getSquare(){
        return this.width*this.height;
    }

    //以下是测试
    public static void main(String[] args) {
        Rectangle r = new Rectangle();
        System.out.println("周长是"+r.getLength());
        System.out.println("面积是"+r.getSquare());

        Rectangle r1 = new Rectangle(4);
        System.out.println("周长是"+r1.getLength());
        System.out.println("面积是"+r1.getSquare());

        Rectangle r2 = new Rectangle(4,6);
        System.out.println("周长是"+r2.getLength());
        System.out.println("面积是"+r2.getSquare());
    }



}
