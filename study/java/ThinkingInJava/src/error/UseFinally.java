package error;
import java.lang.Exception;

class ThreeException extends Exception{}//ThreeException继承了异常类

public class UseFinally extends Exception{

    static int count = 0;

    public static void main(String[] args) {
        while(true){
            try{
                if(count++ == 0){
                    throw new ThreeException();//抛出异常
                }
                System.out.println("没有异常");
            }catch(ThreeException e){
                System.out.println("ThreeException");
            }finally{//即使是return后，finally依然可以得到执行
                System.out.println("我是finally");//无论是否有异常都会得到执行
                if(count == 2) break;
            }
        }
    }

}
