package string;


public class StringAppend {
    public static void main(String[] args) {
        System.out.println("hello " + 1 + " girl");//如果是简单的字符串拼接，用加号

        String str = "我们班有多少个同学：";
        for (int i = 0; i < 10; i++) {//可以先用javac编译此文件，然后再用javap -c 来查看反编译内容
            str += " " + i + "个同学";
        }
        System.out.println(str);
    }
}
