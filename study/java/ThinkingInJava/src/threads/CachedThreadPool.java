package threads;
import java.util.concurrent.*;

public class CachedThreadPool {
    public static void main(String[] args) {
        ExecutorService exec = Executors.newCachedThreadPool();//新缓存线程池
        //Executor执行器，它将管理Thread对象，我感觉就是在Thread上再进一步
        //进行封装，java se5,se6应该优先使用Executor来启动任务
        for(int i= 0;i<5;i++){
            exec.execute(new LiftOff());
        }
        exec.shutdown();
    }
}
