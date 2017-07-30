package io;
import java.util.zip.*;
import java.io.*;

public class Gzip {
    public static void main(String[] args) throws IOException{
        BufferedReader in = new BufferedReader(new FileReader(args[0]));
        BufferedOutputStream out = new BufferedOutputStream(
                new GZIPOutputStream(
                        new FileOutputStream("test.gz")));
        System.out.println("创建文件");
        int c ;
        while ((c = in.read())!=-1)
            out.write(c);
        in.close();
        out.close();
        System.out.println("读取文件");
        BufferedReader in2 = new BufferedReader(
                new InputStreamReader(new GZIPInputStream(
                        new FileInputStream("test.gz"))));
        String s;
        while((s = in2.readLine())!=null)
            System.out.println(s);
    }
}
