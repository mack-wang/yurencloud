package hoding;
import java.util.*;


class Apple {
    private static long counter;
    private final long id = counter++;
    public long id(){return id;}
}

class Orange{}

public class Apples{
    public static void main(String[] args) {
        ArrayList<Apple> apples = new ArrayList();//创建一个类型为Apple的类型案例的容器
        for(int i = 0; i<3;i++)
            apples.add(new Apple());//容器中可以存放Apple()的实例，因为ArrayList<Apple>已经定义了容器内的实例均为Apple，所以下面再使用get方法时，自动会转成Apple类型
//        apples.add(new Orange());
        for(int i = 0;i<apples.size();i++)
            System.out.println(apples.get(i).id());
        for(Apple c :apples)
            System.out.println(c.id());
    }
}
