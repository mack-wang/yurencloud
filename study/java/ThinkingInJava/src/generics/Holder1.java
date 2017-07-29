package generics;

class Automobile{}//自动汽车类

public class Holder1 {//该类只能持有Automobile类型的对象，很有局限性
    private Automobile a;//创建私有的自动汽车类对象a
    public Holder1(Automobile a){this.a = a;}//创建构造方法，该构造方法接受一个自动汽车类对象为参数，并传入，给私有的自动汽车对象a赋值
    Automobile get(){ return a;}//可以使用get方法获得私有的自动汽车类对象a,并返回
}