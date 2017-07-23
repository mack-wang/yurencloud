class WaterSource {
    private String s;
    WaterSource(){
        System.out.println("WaterSource()");
        s = "Constructed";
    }
    public  String toString(){ return s;};
}

public class SprinklerSystem {
    private String a,b,c,d;//未被初始化，所以是null
    private WaterSource source = new WaterSource();
    private int i;
    private float f;
    public String toString(){
        return
                "a="+a+" "+"b="+b+" "+"c="+c+" "+"d="+d+" "+source;//source是一个对象，应该此时他需要变成字符串，所以系统自动调用了他的source.toString()方法
    }

    public static void main(String[] args) {
        SprinklerSystem sprinklers = new SprinklerSystem();
        System.out.println(sprinklers);
    }
}
