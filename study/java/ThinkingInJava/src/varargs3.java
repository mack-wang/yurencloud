public class varargs3 {
    static void printArrays(String str,Integer... args) {//在可变参数前可以添加任意固定参数，但可变参数后，不允许添加固定参数
        for (Object arg : args) {
            System.out.print(arg + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        printArrays("str",1);//固定参数为字符串
        printArrays("str",1,2,3);
    }
}
