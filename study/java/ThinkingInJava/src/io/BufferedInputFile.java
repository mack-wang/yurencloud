package io;

import java.io.*;

public class BufferedInputFile {
    public static String read(String filename) throws IOException {//继承IOException的异常声明
        BufferedReader in = new BufferedReader(new FileReader(filename));//读取文件，并进文件进行xduk
        String s;
        StringBuilder sb = new StringBuilder();//创建文件
        while ((s = in.readLine()) != null) {//读取文件的每一行并赋值给s，如果s不是null则执行
            sb.append(s + "\n");//在创建的文件sb中添加每一行s，并加上换行符
        }
        in.close();//文件缓冲和读取关闭
        return sb.toString();//将创建的文件，以字符串的形式输出
    }

    public static void main(String[] args) throws IOException {
        System.out.println(read("./testdir/index.html"));
    }

}
