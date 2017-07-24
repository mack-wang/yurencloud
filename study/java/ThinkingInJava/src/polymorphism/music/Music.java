package polymorphism.music;


public class Music {
    public static void tune(Instrument i){
        i.play(Note.MIDDLE_C);
    }

    public static void main(String[] args) {
        Wind flute = new Wind();//flute的类型是Wind
        tune(flute);//而tune接受的是类型为Instrument的参数，不是Wind
                    //之所以也能接受Wind，是因为Wind继承了Instrument，Wind可以向上转型成Instrument
                    //可以把Wind的继承删除，看看后果，报错，不可以传递此参数
    }
}
