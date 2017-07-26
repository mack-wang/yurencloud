package hoding;


import java.util.*;

public class CountRandom {
    public static void main(String[] args) {
        Random rand = new Random(47);
        Map<Integer,Integer> m = new HashMap<Integer, Integer>();
        for(int i = 0;i<10000;i++){
            int r = rand.nextInt(20);
            Integer f = m.get(r);//获取当前键名的值，即出现的次数
            m.put(r,f == null ? 1 : f + 1);//用当前的随机数作为键名
        }
        System.out.println(m);
    }
}
