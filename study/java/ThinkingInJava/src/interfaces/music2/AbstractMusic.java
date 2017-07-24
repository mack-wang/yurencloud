package interfaces.music2;
import polymorphism.music.Note;
import static net.Print.*;

abstract class Instrument {//抽象乐器，仅代表乐器类目
   /* 抽象基类（简称抽象类），我们创建Instrument的目的是，通过Instrument（乐器）基类，来调用继承于他的导出类（吉他，小提琴等），
    所以我们写了很多用来调用的空的方法体，即{}内什么也没写，既然没写具体方法，纯粹是用来调用的，那么这个方法我们就叫做"通用接口"，
    通用接口方法既然方法体内什么也没有，我们也别浪费，写个空的方法体{}，因此我们给这种通用接口定义为抽象方法，拥有抽象方法的类叫做
    通用类，我们用关键词abstract来声明为抽象类和抽象方法。抽象类中，可以有正常的方法和成员属性，甚至全是正常的方法和成员也都可以
    */
    private int i;
    public abstract void play(Note n);
    public String what(){return "Instrument";}
    public abstract void adjust();
}

/*其他各种具体乐器，具体到是吉他乐器还是小提琴乐器，他们中都有play(){}方法实体，能够执行具体的演奏任务*/
/* Instrument guitar = new Guitar(); */
/* guitar.play(); */

class Wind extends Instrument {//继承抽象基类乐器的具体乐器手风琴，其中有个可以被抽象方法（通用接口play）调用的具体play()的实现
    public void play(Note n) {
        print("Wind.play() " + n);
    }
    public String what() { return "Wind"; }
    public void adjust() {}
}

class Percussion extends Instrument {
    public void play(Note n) {
        print("Percussion.play() " + n);
    }
    public String what() { return "Percussion"; }
    public void adjust() {}
}

class Stringed extends Instrument {
    public void play(Note n) {
        print("Stringed.play() " + n);
    }
    public String what() { return "Stringed"; }
    public void adjust() {}
}

class Brass extends Wind {
    public void play(Note n) {
        print("Brass.play() " + n);
    }
    public void adjust() { print("Brass.adjust()"); }
}

class Woodwind extends Wind {
    public void play(Note n) {
        print("Woodwind.play() " + n);
    }
    public String what() { return "Woodwind"; }
}

public class AbstractMusic {
    // Doesn't care about type, so new types
    // added to the system still work right:
    static void tune(Instrument i) {
        // ...
        i.play(Note.MIDDLE_C);
    }
    static void tuneAll(Instrument[] e) {
        for(Instrument i : e)
            tune(i);
    }
    public static void main(String[] args) {
        // Upcasting during addition to the array:
        Instrument[] orchestra = {
                new Wind(),
                new Percussion(),
                new Stringed(),
                new Brass(),
                new Woodwind()
        };
        tuneAll(orchestra);
    }
} /* Output:
Wind.play() MIDDLE_C
Percussion.play() MIDDLE_C
Stringed.play() MIDDLE_C
Brass.play() MIDDLE_C
Woodwind.play() MIDDLE_C
*///:~