import static net.Range.*;

public class CreateRange {
    public static void main(String[] args) {
        for (int i : range(10))//生成0-9的数，步长为1
            System.out.println(i);
        for (int i : range(5,10))
            System.out.println(i);//生成5-9的数，步长为1
        for (int i : range(5,15,3))
            System.out.println(i);//生成5-9的数，步长为1


    }
}
