package swing;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import static net.SwingConsole.*;

public class Button2 extends JFrame{
    private JButton b1 = new JButton("按钮1"),b2 = new JButton("按钮2");
    private JTextField txt = new JTextField(10);//设置input
    class ButtonListener implements ActionListener{//创建按钮事件监听器，监听器是什么名字不重要，只要继承ActionListener接口，并实现actionPerformed方法就可以
        public void actionPerformed(ActionEvent e){//传入事件对象
            String name = ((JButton)e.getSource()).getText();//接收按钮事件对象e，getSource()获取按钮对象，getText()获取按钮上的文字
            txt.setText(name);//设置input的value为按钮上的文字
        }
    }
    private ButtonListener bl = new ButtonListener();//创建按钮监听事件对象
    public Button2(){
        b1.addActionListener(bl);//给b1添加按钮监听事件
        b2.addActionListener(bl);
        setLayout(new FlowLayout());//布局
        add(b1);
        add(b2);
        add(txt);
    }

    public static void main(String[] args) {
        run(new Button2(),200,150);
    }
}
