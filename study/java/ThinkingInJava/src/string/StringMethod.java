package string;

import static net.Print.*;
import java.util.Arrays;


public class StringMethod {
    public static void main(String[] args) {
        String a = "hello world";
        char[] b = new char[5];
        print(a);
        print(a.length());//获取字符串长度
        print(a.charAt(1));//获取索引处的字符
        a.getChars(1, 6, b, 0);//起始，终点，赋值对象char[]，插入的起始位置
        print(Arrays.toString(b));
        print(Arrays.toString(a.toCharArray()));//将字符串转成字符数组
        print(a == "hello world");
        print(a.equals("hello world"));
        print(a.equals("Hello world"));//false
        print(a.equalsIgnoreCase("Hello World"));
        print(a.compareTo("hello World"));
        print(a.contains("hello"));
        print(a.startsWith("hello"));//是否是以hello开头的
        print(a.endsWith("world"));//是否是以world结尾的
        print(a.indexOf("world"));//6
        print(a.lastIndexOf("world"));//6 虽然是从后向前搜索，但是返回的还是结果的顺序索引
        print(a.substring(1,2));//6 虽然是从后向前搜索，但是返回的还是结果的顺序索引
        print(a.concat(" wlc"));
        print(a.replace('l',' '));//第二个参数不能为空（空格不算空）
        print("Hello".toLowerCase());
        print(a.toUpperCase());
        print("  hello world".trim());
        print(a.valueOf(2));
        print(a.intern());
        print(Arrays.toString(a.split(" ")));//同js

    }
}
