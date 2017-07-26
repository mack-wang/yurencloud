package hoding;


import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class SetOfInteger {
    public static void main(String[] args) {
        Random rand = new Random(47);
        Set<Integer> s = new HashSet<Integer>();//Set就是Collection，接口相同，但行为不同，Set不会添加已有的对象
        for(int i = 0;i<10000;i++){
            s.add(rand.nextInt(30));
        }
        System.out.println(s);
    }
}
