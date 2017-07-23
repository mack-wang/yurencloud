public class varargs4 {
    static void printArrays(String str,Character c,Integer... args) {//在可变参数前可以添加任意固定参数，但可变参数后，不允许添加固定参数
        for (Object arg : args) {
            System.out.print(arg + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printArrays("str",'1');
        printArrays("str",'1',2,3);
    }
}
