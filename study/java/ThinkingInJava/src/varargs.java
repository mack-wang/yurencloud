public class varargs {
    static void printArrays(Object... args) {//可变参数，在类型后面添加三个点，表示参数个数任意。Object对象 接收任何类型参数
        for (Object arg : args) {
            System.out.print(arg + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printArrays(1);
        printArrays(1, 1.5);
        printArrays(1, 1.5, 'c');
    }
}
