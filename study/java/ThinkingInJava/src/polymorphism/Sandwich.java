package polymorphism;
import static net.Print.*;

class Meal{
    Meal(){print("Meal()");}
}

class Bread{
    Bread(){print("Bread()");}
}

class Cheese{
    Cheese(){print("Cheese()");}
}

class Lettuce{
    Lettuce(){print("Lettuce()");}
}

class Lunch extends Meal {
    Lunch(){print("Lunch()");}
}

class PortableLunch extends Lunch{
    PortableLunch(){print("PortableLunch");}
}


public class Sandwich extends PortableLunch{

    private Bread b = new Bread();
    private Cheese c = new Cheese();
    private Lettuce l = new Lettuce();
    public Sandwich(){print("Sandwich()"+a);}
    public static void main(String[] args) {
        new Sandwich();//1 这是第一步被执行的
        //但导出类Sandwich继承了基类PortableLunch，基类（Lunch的导出类）PortableLunch继承了基类Lunch,基类(Meal的导出类)Lunch继承了基类Meal
        //所以Meal的构造器得到了最先的执行，输出Meal()
        //然后Lunch(),PortableLunch(),
        //最后才执行Sandwich的构造器，但在Sandwich的构造器执行之前，要先对Sandwich内的所有成员（也可以叫属性）进行初始化
        //因为编译器并不知道构造器是否会调用Sandwich内部的成员，例如上面的成员a，所以要先对内部所有成员初始化后，最后才执行构造器
        //Sandwich内部成员并不是根据行数的先后来执行的，比如成员a，或者把Sandwich构造器放到最上面，执行结果都一样的。
    }
    private int a = 10;
}
