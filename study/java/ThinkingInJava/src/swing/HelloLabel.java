package swing;
import javax.swing.*;
import java.util.concurrent.*;

public class HelloLabel {
    public static void main(String[] args) throws Exception{
        JFrame frame = new JFrame("Hello Swing");//创建窗口，窗口名叫Hello Swing
        JLabel label = new JLabel(("A Label"));//创建文本框，文本框的名字叫A Label
        frame.add(label);//把文本框添加到窗口中
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//设置默认的关闭窗口操作，接收到EXIT_ON_CLOSE信号就开启或关闭窗口
        frame.setSize(300,100);//设置窗口的尺寸为300px,100px
        frame.setVisible(true);//让窗口显示出来
        TimeUnit.SECONDS.sleep(1);//设置定时器，以秒为单位，1秒
        label.setText("Hey! This is Different!");//在窗口的文本框中显示文字
        /*
        * 直接在main()线程中，对GUI组件编写代码不好，Swing有它自己的专用线程来接收UI事件，并更新屏幕
        * 所以我们会在下一个案例中使用SwingUtilities.invokeLater()来实现
        *
        * */
    }
}
