package swing;
import javax.swing.*;
import java.awt.*;
import static net.SwingConsole.*;

public class GridLayout1 extends JFrame{
    public GridLayout1(){
        setLayout(new GridLayout(7,3));//在窗口中开建一个7行，3列的表格
        for(int i=0;i<20;i++)//按钮将按照从左到右从上到下排列
            add(new JButton("Button "+i));
    }

    public static void main(String[] args) {
        run(new GridLayout1(),300,300);
    }

}
