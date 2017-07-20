public class UseForeach {
    public static void main(String[] args) {
        int[] items = new int[5];
        items[0] = 1;
        items[1] = 2;
        items[2] = 3;
        for(int item : items){//同php中的foreach，只不过书写顺序相反
            System.out.println(item);
        }
    }
}
