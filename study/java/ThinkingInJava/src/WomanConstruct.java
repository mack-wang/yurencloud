class Woman{
    Woman(int i){//每个类中的和类同名的方法，就是构造方法，在该类被new实例化时，会进行初始化自动调用构造方法，可以传递参数
        System.out.print("我是"+i);
    }
}

public class WomanConstruct {
    public static void main(String[] args) {
        for(int i= 0;i<10;i++)
            new Woman(i);
    }
}


