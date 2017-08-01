package swing;
import javax.swing.*;
import java.awt.*;
import static net.SwingConsole.*;//这里封装了在新线程中创建窗口，设置关闭，接收尺寸参数，窗口可见true

public class Button extends JFrame{
    private JButton
    b1 = new JButton("Button 1"),
    b2 = new JButton("Button 2");
    public Button(){
        setLayout(new FlowLayout());//直接使用基类的方法，setLayout来设置布局
        add(b1);//直接使用基类的方法，添加按钮
        add(b2);
    }

    public static void main(String[] args) {
        run(new Button(),200,100);
    }
}
