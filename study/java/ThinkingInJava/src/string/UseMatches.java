package string;


import java.util.Arrays;

public class UseMatches {
    public static void main(String[] args) {
        System.out.println("-1234".matches("-?\\d+"));
        System.out.println("1234".matches("-?\\d+"));
        System.out.println("+1234".matches("-?\\d+"));
        System.out.println("+1234".matches("(-|\\+)?\\d+"));
        String strs = "cat,dog,pig";
        System.out.println(Arrays.toString(strs.split(",")));
    }
}
