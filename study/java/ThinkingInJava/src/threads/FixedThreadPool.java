package threads;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class FixedThreadPool {
    public static void main(String[] args) {
        ExecutorService exec = Executors.newFixedThreadPool(5);//使用newFixedThreadPool,新固定线程池，可以传递参数，来一次性创建所有线程，
        //从而不用每用一次再创建一次，提高性能。
        //书中推荐使用newCachedThreadPool,如果这个出问题了，才考虑用Fixed
        for(int i= 0;i<5;i++){
            exec.execute(new LiftOff());
        }
        exec.shutdown();
    }
}
