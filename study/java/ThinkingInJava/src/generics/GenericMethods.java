package generics;


public class GenericMethods {
    public <T> void f(T x){//泛型方法 在返回的参数前加类型参数
        System.out.println(x.getClass().getName());//输出获取的参数的的类的名称
    }

    public static void main(String[] args) {
        GenericMethods gm = new GenericMethods();
        gm.f("");
        gm.f(1);
        gm.f(1.0);
        gm.f(1.0F);
        gm.f('c');
        gm.f(gm);
    }
}
