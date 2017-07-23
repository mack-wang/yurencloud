package reuse;

import static net.Print.*;

/*
* 加载器启动
* 找出Beetle类的编译代码
* 加载过程中发现他继承了一个基类Insect，然后先加载基类Insect
* 所有的static初始化正确加载
* 加载完毕，对象被创建
* 对象中的所有的基本类型都会设置成默认值，
* 然后基类的构造器被调用
* */


/*以下注释的数字，就是初始化加载的顺序*/
class Insect {
    private int i = 9;
    protected int j;

    Insect() {
        print("i=" + i + ", j=" + j);//4
        j = 39;
    }

    private static int x1 = printInit("static Insect.x1 initialized");//1

    static int printInit(String s) {
        print(s);
        return 47;
    }
}

public class Beetle extends Insect {
    private int k = printInit("Beetle.k initialized");//5

    public Beetle() {
        print("k = " + k);//6
        print("j = " + j);//7
    }

    private static int x2 = printInit("static Beetle.x2 initialized");//2

    public static void main(String[] args) {
        print("Beetle constructor");//3
        Beetle b = new Beetle();
    }
}
