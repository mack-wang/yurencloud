package hoding;
import java.util.*;


public class AddingGroupts {
    public static void main(String[] args) {
        Collection<Integer> collection =
        new ArrayList(Arrays.asList(1,2,3,4,5));//asList方法可以创建一组数组
        Integer[] moreInts = {6,7,8,9,10};
        collection.addAll(Arrays.asList(moreInts));//addAll可以添加一组数组

        Collections.addAll(collection,11,12,13,14,15);//可以在尾部继承添加
        Collections.addAll(collection,moreInts);
        for(int i:collection)
            System.out.println(i);

        List<Integer> list = Arrays.asList(16,17,18,19,20);
        list.set(1,99);//在索引1处替换成99
        for(int l:list)
            System.out.println(l);
        System.out.println(collection);//容器不用通过Arrays.toString()来转换成String打印，可以直接打印！！

        Collection<String> animals = new ArrayList<String>();//生成集合
        Collections.addAll(animals,"cat","dog","fish","pig");
        System.out.println(animals);

        Map map = new HashMap();//生成键值对的哈稀表
        map.put("cat","tom");
        map.put("dog","bob");
        map.put("pig","cindy");
        System.out.println(map);


    }
}
