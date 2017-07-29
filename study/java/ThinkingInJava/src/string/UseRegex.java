package string;
import static net.Print.*;

public class UseRegex {
    public static void main(String[] args) {
        //正则练习
        String s = "I am from China. My name is mack wang.";
        String c = ".";
        String d = "a";
        String a = "12";
        print(c.matches("."));//判断是否完全一样；
        print(d.matches("[abc]"));//判断是否是其中的一个字符
        print(s.startsWith("I"));
        print(s.replaceAll("a","o"));
        print(d.matches("[a-z]"));
        /*
        B 完全一样

        */

    }
}
