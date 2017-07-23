package reuse;
import static net.Print.*;

public class Cartoon extends Drawing {//Cartoon继承了Drawing,Drawing继承了Art，所以Art的构造器最先执行，然后Drawing,最后Cartoon
    public Cartoon(){ print("Cartoon constructor");}

    public static void main(String[] args) {
        Cartoon x = new Cartoon();
    }
}

class Art {
    Art(){print("Art constructor");}
}

class Drawing extends Art {
    Drawing(){print("Drawing constructor");}
}
