package polymorphism.shape;


import java.util.Random;

public class RandomShapeGenerator {
    private Random rand = new Random(47);
    public Shape next(){
        switch (rand.nextInt(2)){
            default:
                case 0: return new Circle();
                case 1: return new Square();
        }
    }
}
