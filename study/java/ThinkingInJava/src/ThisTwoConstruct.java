public class ThisTwoConstruct {
    ThisTwoConstruct(int i) {//一个类中可以有多个构造器，即重载多个构造器，即构造器可以同名，只要参数的个数或者顺序不同即可
        this("hello");//this代表整个类，this()表示在使用构造器，this(1）因为参数是整型，所以使用的是第一个构造器，this("hello"),使用的是第二个构造器
        System.out.println(i);
    }

    ThisTwoConstruct(String s) {
        System.out.println(s);
    }

    public static void main(String[] args) {
        new ThisTwoConstruct(1);
    }
}
