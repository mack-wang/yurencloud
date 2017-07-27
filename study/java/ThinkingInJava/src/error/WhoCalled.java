package error;


public class WhoCalled {
    static void f(){
        try{
            throw new Exception();
        }catch(Exception e){
            for(StackTraceElement ste :e.getStackTrace())//可以得到方法执行的轨迹
                System.out.println(ste.getMethodName());
        }
    }

    static void g(){f();}
    static void h(){g();}

    public static void main(String[] args) {
        f();
        System.out.println("-----------------");
        g();
        System.out.println("-----------------");
        h();
    }
}
