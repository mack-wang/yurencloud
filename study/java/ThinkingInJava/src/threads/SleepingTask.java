package threads;
import java.util.concurrent.*;

public class SleepingTask extends LiftOff{
    public void run(){
        try{
            while(countDown-- > 0){
                System.out.print(status());
                TimeUnit.MICROSECONDS.sleep(1000000);//休眠，我感觉单位是微秒，100万微秒才有1秒的感觉
                //类似js中的setTimeout
                //从输出中，我们可以明显的看出线程是按顺序切换的，切换成了最小的执行单位，如此反复
            }
        } catch (InterruptedException e){
            System.out.println("Interrupted");
        }
    }

    public static void main(String[] args) {
        ExecutorService exec = Executors.newCachedThreadPool();
        for(int i=0;i<5;i++){
            exec.execute(new SleepingTask());
        }
        exec.shutdown();
    }
}
