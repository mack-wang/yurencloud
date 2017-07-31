package threads;


public class MoreBasicThreads {
    public static void main(String[] args) {
        for(int i = 0;i<5;i++){
            new Thread(new LiftOff()).start();//创建新线程，并start()开始执行
        }
        System.out.println("等待执行LiftOff");
        /*从输出看，输出的结果不一定一样，看执行时的具体cpu情况*/
        /*线程调度是非确定性的*/
    }
}
