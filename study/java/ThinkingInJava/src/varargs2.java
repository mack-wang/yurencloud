public class varargs2 {
    static void printArrays(Integer... args) {//Integer整型 只接受整型的参数，其他类型参数均会报错
        for (Object arg : args) {
            System.out.print(arg + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printArrays(1);
        printArrays(1, 2);
        printArrays(1, 2, 4);
    }
}
