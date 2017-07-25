package innerclasses;


public class Tom {
    int age = 23;
    private int height = 23;
    void hello (){
        System.out.println("hello");
    }
    class Children{
        void say(){
            hello();
            System.out.println(age);
            System.out.println(height);
        }
    }

    public void useChildre(){
        Children c = new Children();
        c.say();
    }

    public static void main(String[] args) {
        Tom t = new Tom();
        t.useChildre();
    }
}
