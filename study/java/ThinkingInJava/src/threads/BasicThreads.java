package threads;


public class BasicThreads {
    public static void main(String[] args) {
        Thread t = new Thread(new LiftOff());//创建一个线程
        t.start();
        System.out.println("等待执行LiftOff");
    }
}
