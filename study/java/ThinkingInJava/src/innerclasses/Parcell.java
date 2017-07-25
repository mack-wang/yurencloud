package innerclasses;

public class Parcell {//人名
    class Contents {//内容，内部类
        private int i = 11;
        public int value(){ return i;}
    }

    class Destination {//目的，内部类
        private String label;
        Destination(String whereTo){
            label = whereTo;
        }
        String readLabel(){return label;}
    }

    public void ship(String dest){//船，方法，里面实例化了两个内部类
        Contents c = new Contents();
        Destination d = new Destination(dest);
        System.out.println(d.readLabel());
    }

    public static void main(String[] args) {
        Parcell p = new Parcell();
        p.ship("Tasmania");
    }
}
