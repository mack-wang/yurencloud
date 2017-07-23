public class EnumMoney {
    public static void main(String[] args) {//同一个目录下的文件和方法全部都可以互相访问，不用引入，不同目录才要import
        for(UseEnum s : UseEnum.values()){//values是静态方法，会以数组的形式输出UseEnum
            System.out.println(s);
            System.out.println(s.ordinal());//可以调用ordinal方法输出当前属性的排序
            System.out.println(s.toString());//可以调用toString输出当前属性的名字
        }
    }
}
