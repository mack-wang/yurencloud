package reuse;
import java.util.*;
import static net.Print.*;


final class Girl {//给类添加final，则无法被继承
    int age = 15;
    public static void say(){
        print("hello");
    }
}

public class FinalData{
    public static final int i = 10;
    public final int j;//final可以不进行初始化，并在构造器中进行初始化，一旦初始化，则不可以再进行改变（否则会报错）
    public FinalData(){
        j = 1;
        //j = 3;
        print(j);
    }
    public FinalData(final int i){//final可以作用于参数，参数只可读，不可改变
        j = i;
        //i = 10;
        print(j);
        print(i);
    }

    public static void main(String[] args) {
        //i = 11;无法对final的基本类型赋值
        print(i);
        new FinalData(7);
        new FinalData();
        //say();
    }
}

