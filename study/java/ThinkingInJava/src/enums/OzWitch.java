package enums;
import static net.Print.*;

public enum OzWitch {
    WEST("我是西方"),
    NORTH("我是北方"),
    EAST("我是东方"),
    SOUTH("我是南方");//枚举类型要先定义，不然会报错。括号内的是枚举的描述
    private  String description;
    OzWitch(String description){
        this.description = description;
    }
    public String getDescription(){
        return description;
    }

    public static void main(String[] args) {
        for(OzWitch witch :OzWitch.values())
            print(witch + ":" + witch.getDescription());
    }
}
