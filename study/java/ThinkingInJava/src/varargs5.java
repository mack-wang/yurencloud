public class varargs5 {
    static void printString(String... args) {//可以传递以逗号分开的参数字符串，也可以传递一个字符串数组(传递数组后不得再传参数)
        for (Object arg : args) {
            System.out.print(arg + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printString("one","two","three");//字符串列表，会自动转成字符串数组再传递
        String[] a = {"one","two","three","four"};//字符串数组，将直接传递，且不得再传其他参数
        printString(a);//
    }
}
