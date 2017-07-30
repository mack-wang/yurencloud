package array;


import java.util.Arrays;

public class MultiDimensional {
    public static void main(String[] args) {
        int[] a = {1,2,3,4};
        int[][] aa = {
                {1,2,3,4},
                {1,2,3,4},
                {1,2,3,4},
        };

        String[] s = new String[10];
        Arrays.fill(s,"hello");//以同一类型对象填充数组

        int[] na = new int[4];
        System.arraycopy(a,0,na,0,a.length);//复制源，复制源起始位置，复制终点对象，偏移位置，复制长度
        //这样复制比for循环复制效率高
        //可以复制对象数组，但仅是复制对象的引用，而不是对象本身，所以说是浅复制

        System.out.println(Arrays.toString(a));
        System.out.println(Arrays.toString(aa));//因为是二维数组，所以数组中的对象，是二维数组的对象地址
        System.out.println(Arrays.deepToString(aa));//这个才能正确打印多信数组
        System.out.println(Arrays.toString(s));
        System.out.println(Arrays.toString(na));
        System.out.println(Arrays.equals(a,na));//数组比较,比内容，而不是比地址
        System.out.println(a == na);//这种数组比较方式是错的，估计是比较数组的引用地址，地址明显是不同的
        int[] ca = a;
        System.out.println(a == a);//true
        System.out.println(a == ca);//true

        int[] z = {7,89,31,1};
        String[] x = {"hello","apple","bob","Can"};
        Arrays.sort(z);//排序是直接改变数组本身，return void
        Arrays.sort(x);
        System.out.println(Arrays.toString(z));
        System.out.println(Arrays.toString(x));//大写字母先排序，然后才小写排序
        Arrays.sort(x,String.CASE_INSENSITIVE_ORDER);//忽略大小写，按字母的先后顺序排序
        System.out.println(Arrays.toString(x));

        /*
        * 因为数组是固定长度对象，所以不可以进行插入操作。如果真的想进行插入操作，应该用可变数组，即容器。
        * */

    }
}
