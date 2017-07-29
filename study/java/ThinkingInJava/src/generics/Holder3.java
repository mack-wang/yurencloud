package generics;


public class Holder3<T> {//设置类型参数（把类型当作参数来传递，从而不用指定具体类型）
    private T a;
    public Holder3(T a){this.a = a;}
    public void set(T a){this.a = a;}
    public T get(){return a;}

    public static void main(String[] args) {
        Holder3<Automobile> h3 = new Holder3(new Automobile());//此时Automobile就作为类型参数取代了T
        Automobile a = h3.get();
    }
}
