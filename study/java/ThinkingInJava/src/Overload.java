public class Overload {
    static void f(String a,int b){//方法重载，就是说在同一个类中，有两个同名的方法，可以用构造器实现，也可以用参数的个数不同，顺序不同来实现
        System.out.println("String:"+a+"int:"+b);
    }
    static void f(int b,String a){
        System.out.println("String:"+a+"int:"+b);
    }

    public static void main(String[] args) {
        f("1",2);
        f(1,"2");
    }
}
