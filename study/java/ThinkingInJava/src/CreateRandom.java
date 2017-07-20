import java.util.Random;

public class CreateRandom {
    public static void main(String[] args) {
        for (int i = 0; i < 25; i++) {
            Random rand = new Random();
            //nextInt nextFloat nextLong 只接受一个上限参数，可以用加法来得出一个下限
            System.out.println(rand.nextInt(50)+50);//生成50-100的随机数
        }
    }
}
