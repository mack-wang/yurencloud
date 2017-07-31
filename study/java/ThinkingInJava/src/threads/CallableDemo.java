package threads;
import java.util.concurrent.*;
import java.util.*;

class TaskWithResult implements Callable<String>{//继承Callable接口，Callable是一个泛型，我们在此指定String类型
    private int id;
    public TaskWithResult(int id){
        this.id = id;
    }
    public String call(){//call方法接收前一个任务结束时的值
        return "result of TaskWithResult " + id;
    }
}

public class CallableDemo {
    public static void main(String[] args) {
        ExecutorService exec = Executors.newCachedThreadPool();
        ArrayList<Future<String>> results = new ArrayList<Future<String>>();
        for(int i=0;i<10;i++)
            results.add(exec.submit(new TaskWithResult(i)));//通过ctrl b可以看到submit()返回一个Future对象
        for(Future<String> fs :results)
            try{
                System.out.println(fs.get());//get()可以得到前一个任务返回的结果值
            }catch(InterruptedException e){
                System.out.println(e);
                return;
            }catch(ExecutionException e){
                System.out.println(e);
            }finally{
                exec.shutdown();
            }
    }
}
