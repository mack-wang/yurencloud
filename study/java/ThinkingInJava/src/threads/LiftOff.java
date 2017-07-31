package threads;


public class LiftOff implements Runnable{
    protected int countDown = 10;//设置一个上限
    private static int taskCount = 0;//当前任务数
    private final int id = taskCount++;//任务数++
    public LiftOff(){}//空构造器
    public LiftOff(int countDown){//接受1个参数的构造器
        this.countDown = countDown;
    }
    public String status(){//输出当前的任务id，如果上限到了，就输出结束
        return "#"+id+"("+(countDown > 0 ? countDown:"Liftoff!") +"）,";
    }
    public void run(){//通过ctrl b 可以看到接口Runnable 要求实现一个run方法
        while(countDown-- > 0){
            System.out.print(status());
            Thread.yield();//线程调试器，结束当前线程，启动一个新线程
        }
    }
}
