public class ArrayDefine {
    public static void main(String[] args) {
        int[] a = new int[5];//定义数组，加上[]就可以
        float[] b = new float[5];
        char[] c = new char[5];
        int[] d = {1,2,3,4,5};//直接对数组定义，并赋值
        a[2] = 1;
        b[2] = 1;
        c[2] = 'd';
        for (int i : a)
        System.out.println(i);
        for (float i : b)
        System.out.println(i);
        for (char i : c)
        System.out.println(i);
        for (int i : d)
        System.out.println(i);
    }
}
