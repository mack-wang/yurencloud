package interfaces;

interface CanFight{//接口一
    void fight();
}

interface CanSwim{//接口二
    void swim();
}

interface CanFly{//接口三
    void fly();
}

class ActionCharacter{//类一
    public void fight(){}
}

class Hero extends ActionCharacter implements CanFight,CanSwim,CanFly{//继承类一，接入接口一，接口二，接口三
    public void swim(){}
    public void fly(){}
}

public class Adventure {
    public static void t(CanFight x) { x.fight(); }
    public static void u(CanSwim x) { x.swim(); }
    public static void v(CanFly x) { x.fly(); }
    public static void w(ActionCharacter x) { x.fight(); }
    public static void main(String[] args) {
        Hero h = new Hero();//实例化Hero得到h
        t(h); // Treat it as a CanFight// h是Hero类型，但接入了CanFight接口，所以能调用fight()方法
        u(h); // Treat it as a CanSwim//同上
        v(h); // Treat it as a CanFly//同上
        w(h); // Treat it as an ActionCharacter//这个是继承来的
    }

}
