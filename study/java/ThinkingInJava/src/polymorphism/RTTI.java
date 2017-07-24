package polymorphism;

class Useful{
    public void f(){}
    public void g(){}
}

class MoreUseful extends Useful{
    public void f(){}
    public void g(){}
    public void u(){
        System.out.println("hello");
    }
    public void c(){}
}

public class RTTI {
    public static void main(String[] args) {
        Useful[] x = {
                new Useful(),
                new MoreUseful()
        };
        x[0].f();
        x[1].g();//x[1]类型是Useful，Useful中有g()方法，最终MoreUseful中的g()方法会覆盖Useful中的g()方法，并得到执行
        //x[1].u();//因为x[1]类型是Useful，Useful中没有u()方法，所以会报错

        //强制转换类型，就是向下转型的方法
        //从导出类向基类转换类型，是向上转型，因为导出类继承了基类，所以转型后，调用基类方法，肯定能得到执行
        //从基类向导出类转换类型，是向下转型，因为基类不一定包含导出类的方法，所以转型后，调用导出类的方法，可能会找不到此方法，因为基类中没有。
        ((MoreUseful)x[1]).u();//强制把Useful类型转成MoreUseful类型，且1本身就是MoreUseful导出类，MoreUseful中有u方法，所以得到了执行
        ((MoreUseful)x[0]).u();//强制把Useful类型转成MoreUseful类型，但0本身是Useful基类，强制导成MoreUseful会出现类型转换异常的错误
        //但仍然得到了执行，
    }
}
