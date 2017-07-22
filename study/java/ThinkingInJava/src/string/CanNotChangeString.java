package string;
import static net.Print.*;

public class CanNotChangeString {
    public static String upcase(String s){
        return s.toUpperCase();
    }

    public static void main(String[] args) {
        String q = "Hello Wrold";
        print(q);
        String qq = upcase(q);//将q变成大写，q本身并不会改变，会赋值到qq
        print(qq);//大写
        print(q);//不变
    }











}
