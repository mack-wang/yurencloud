package generics;

public class Holder2 {
    private Object a;//因为自动汽车类自动继承基类Object，所以我们可以让这个类直接持有Object类型的对象
    public Holder2(Object a){ this.a = a;}
    public void set(Object a){ this.a = a;}
    public Object get(){return a;}

    public static void main(String[] args) {
        Holder2 h2 = new Holder2(new Automobile());//实例化一个传入自动汽车类型对象的参数
        Automobile a = (Automobile)h2.get();//获得自动汽车类型对象的返回值
        h2.set("Not an Automobile");//通过set方法，设置参数a为一个字符串
        String s = (String)h2.get();//返回一个字符串类型的返回值
        h2.set(1);//通过set方法，设置参数a为整型
        Integer x = (Integer)h2.get();//返回一个整型类型的返回值
    }
}

/*
* 通过将私有对象a设置为Object对象，从而允许容器能够同时持有多种类型的对象，减少了一些类型的限制
* */