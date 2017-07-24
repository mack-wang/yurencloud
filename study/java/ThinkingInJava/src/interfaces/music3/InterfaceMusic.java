//: interfaces/music5/Music5.java
// Interfaces.
package interfaces.music3;
import polymorphism.music.Note;
import static net.Print.*;

interface Instrument {
    /*
    * 和music2中的用abstract抽象关键字来实现的接口相比
    * interface使抽象概念更向前迈进一步，interface就是纯粹为实现接口而生
    * 二者的相同点和区别
    * abstract类中可以1个或者多个抽象方法（即通用接口，即没有方法体）且要加abstract关键词，也可以有1个或者多个正常方法，即有方法体
    * 而interface类中必须全部都是通用接口，即没有方法体，且不需要加额外的关键词。不可以有正常方法，即有方法体{}
    * 导出类在继承接口的时候，也不用extends关键词了，改用implements（接入，执行，使生效的意思）
    * 第二点区别是抽象类中还是可以定义私有成员，而接口中，全部都为public公开成员，公开方法，任何没有声明的，都默认为public
    *
    *
    * */

    // Compile-time constant:
    int VALUE = 5; // static & final
    // Cannot have method definitions:
    void play(Note n); // Automatically public
    void adjust();
}

class Wind implements Instrument {
    public void play(Note n) {
        print(this + ".play() " + n);
    }
    public String toString() { return "Wind"; }
    public void adjust() { print(this + ".adjust()"); }
}

class Percussion implements Instrument {
    public void play(Note n) {
        print(this + ".play() " + n);
    }
    public String toString() { return "Percussion"; }
    public void adjust() { print(this + ".adjust()"); }
}

class Stringed implements Instrument {
    public void play(Note n) {
        print(this + ".play() " + n);
    }
    public String toString() { return "Stringed"; }
    public void adjust() { print(this + ".adjust()"); }
}

class Brass extends Wind {
    public String toString() { return "Brass"; }
}

class Woodwind extends Wind {
    public String toString() { return "Woodwind"; }
}

public class InterfaceMusic {
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
