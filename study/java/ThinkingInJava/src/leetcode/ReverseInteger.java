package leetcode;

public class ReverseInteger {
    public int reverse(int x) {
        String s = ""+x;
        String rs = new String();
        for(int i = 0;i<s.length();i++){
            rs += s.charAt(s.length()-i-1);
        }
        //如果是负数，则去尾在头加负号
        if(rs.indexOf("-")>0){
            rs = "-"+rs.substring(0,rs.length()-1);
        }
        //如果超出整型范围，则返回0。
        Long r = Long.parseLong(rs);//因为超出了，所以只能转成Long
        if(r > Integer.MAX_VALUE || r < Integer.MIN_VALUE){
            return 0;
        }

        return Integer.parseInt(rs);
    }

    public static void main(String[] args) {
        ReverseInteger r = new ReverseInteger();
        System.out.println(r.reverse(1234567899));
    }
}
