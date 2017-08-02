package swing;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.plaf.basic.*;
import java.awt.*;
import static net.SwingConsole.*;

public class Buttons extends JFrame{
    private JButton jb = new JButton("JButton");//新建按钮对象
    private BasicArrowButton
    up = new BasicArrowButton(BasicArrowButton.NORTH),
    down = new BasicArrowButton(BasicArrowButton.SOUTH),
    right = new BasicArrowButton(BasicArrowButton.EAST),
    left = new BasicArrowButton(BasicArrowButton.WEST);//新建4个上下左右方向按钮
    public Buttons(){//构造器
        setLayout(new FlowLayout());//创建框架，传入响应式框架
        add(jb);//添加按钮
        add(new JToggleButton("JToggleButton"));//添加toggle按钮
        add(new JCheckBox("JCheckBox"));//添加选择框
        add(new JRadioButton("JRadioButton"));//添加单选框
        JPanel jp = new JPanel();//新建新面板
        jp.setBorder(new TitledBorder("Directions"));//面板的文字叫Directions，像div窗口，带border的
        jp.add(up);//把按钮添加到上面的面板
        jp.add(down);
        jp.add(right);
        jp.add(left);
        add(jp);//把面板添加到框架中
    }

    public static void main(String[] args) {
        run(new Buttons(),350,200);
    }


}
