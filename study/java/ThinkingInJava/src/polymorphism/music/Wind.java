package polymorphism.music;


public class Wind extends Instrument{
    public void play(Note n){
        System.out.println("Wind.play()"+n);
    }
}
