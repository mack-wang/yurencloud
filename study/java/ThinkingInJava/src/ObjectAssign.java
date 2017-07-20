import net.ObjectDiff;

class Hello {
    int age;
}

public class ObjectAssign {
    public static void main(String[] args) {
        ObjectDiff a = new ObjectDiff();
        ObjectDiff b = new ObjectDiff();
        Hello c = new Hello();
        c.age = 11;
        a.level = 9;
        b.level = 10;
        a = b;
        System.out.println(a.level);

    }
}
