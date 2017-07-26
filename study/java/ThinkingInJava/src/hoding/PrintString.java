package hoding;


import java.util.LinkedList;

public class PrintString {
    public static void main(String[] args) {
        String str = "+U+n+c---+e+r+t---+a-+i-+n+t+y";
        char[] cs = str.toCharArray();
        LinkedList<Character> c = new LinkedList<Character>();
        for (int i = 0; i < cs.length; i++) {
            if (cs[i] == '+') {
                c.addFirst(cs[i + 1]);
            }
            if (cs[i] == '-') {
                System.out.println(c.removeFirst());
            }
        }
    }
}
