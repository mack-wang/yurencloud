package annotations;
import java.lang.annotation.*;

@Target(ElementType.METHOD)
/*
* @Target表示注解可以用于什么地方，可能的ElementType参数包括：
* CONSTRUCTOR：构造器的声明
* FIELD：域声明，包括enum实例
* LOCAL_VARIABLE：局部变量声明
* METHOD：方法声明
* PACKAGE：包声明
* PARAMETER：参数声明
* TYPE：类、接口，包括注解类型或者enum声明
* */
@Retention(RetentionPolicy.RUNTIME)
/*
* 表示需要在什么级别保存该注解信息，可以选的RetentionPolicy参数包括：
* SOURCE：注解将被编译器丢弃
* CLASS：注解在class文件中可用，但会被VM丢弃。
* RUNTIME：VM将在运行期也保留注解，因此可以通过反射机制读取注解的信息
*
* */


public @interface Testable {
    int id();
    String description() default "no description";
}
