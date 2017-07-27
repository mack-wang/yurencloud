package error;
import java.lang.Throwable;


import com.sun.xml.internal.bind.v2.schemagen.xmlschema.SimpleExtension;

public class CreateExceptions extends Exception {//继承错误异常处理类
//    public class InheritingExceptions{
//        public void f() throws SimpleExtension{//执行f()时，抛出错误；throws关键词是异常说明
//            System.out.println("抛出f()错误");
//            throw new SimpleExtension();
//        }
//    }
//    public static void main(String[] args) {
//        InheritingExceptions sed = new InheritingExceptions();
//        try{
//            sed.f();
//        }catch(SimpleExtension e){//接收自定义的错误
//            System.out.println("抓到错误了");//
//        }
//    }
}
