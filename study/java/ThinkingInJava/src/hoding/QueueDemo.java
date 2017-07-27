package hoding;
import java.util.*;


public class QueueDemo {
    public static void printQ(Queue queue){
        while(queue.peek() != null)
            System.out.print(queue.remove()+" ");
        System.out.println();
    }

    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<Integer>();
        Random rand = new Random(47);//如果传入随机数种子，则随机数是固定的，是通过算法算出来的。而不传入随机数种子，则默认传入系统当前时间作为种子
        for(int i=0;i<10;i++)
            queue.offer(rand.nextInt(i+10));
        printQ(queue);
        Queue<Character> qc = new LinkedList<Character>();
        for(char c : "Brontosaurus".toCharArray())
            qc.offer(c);
        printQ(qc);
    }
}
