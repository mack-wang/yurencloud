package hoding;


import java.util.*;

public class Iteration {
    public static void main(String[] args) {
        List<String> pets = new ArrayList<String>(Arrays.asList("cat","dog","pig"));
        Iterator<String> it = pets.iterator();//迭代器，hasNext()检查元素中是否还有下一个，next获取下一个元素，remove把迭代器返回的元素删除
        System.out.println(it.next());

    }
}
