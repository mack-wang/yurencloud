package swing;
import javax.swing.*;
import java.util.concurrent.*;


public class SubmitSwingProgram extends JFrame {
    JLabel label;//文本框对象实例
    public SubmitSwingProgram(){//创建构造方法
        super("Hello Swing");//调用父类，即基类的JFrame的构造函数，实例化，登入Hello Swing窗口名
        label = new JLabel("A label");
        add(label);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//如果没有这一行，则程序按关闭时，不会退出程序，而是后台继续执行
        setSize(300,100);
        setVisible(true);
    }
    static SubmitSwingProgram ssp;//初始化一个静态SubmitSwingProgram对象

    public static void main(String[] args) throws Exception{
        SwingUtilities.invokeLater(new Runnable(){//通过SwinUtilities来延迟调用（启动一个线程来执行来启动窗口）
            public void run(){ ssp = new SubmitSwingProgram();}
        });
        TimeUnit.SECONDS.sleep(1);//
        SwingUtilities.invokeLater(new Runnable() {//通过SwinUtilities来延迟调用（启动一个线程来在文本框内输入字符Hey）
            @Override
            public void run() {
                ssp.label.setText("Hey");
            }
        });

    }

}
