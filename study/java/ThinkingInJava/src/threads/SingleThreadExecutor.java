package threads;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SingleThreadExecutor {
    public static void main(String[] args) {
        ExecutorService exec = Executors.newSingleThreadExecutor();//fixed等于1时的固定线程
        for(int i= 0;i<5;i++){
            exec.execute(new LiftOff());//此时你会发现，这个线程是排队进行，所有的任务都是使用同一个线程，是阻塞式的线程
            //所以他的输出结果是按顺序的！可确定
        }
        exec.shutdown();
    }
}
