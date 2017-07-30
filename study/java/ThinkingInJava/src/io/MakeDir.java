package io;
import java.io.*;


public class MakeDir {
    public static void main(String[] args) {
        File file = new File("./testdir");
        for(String i : file.list())
            System.out.println(i);
        System.out.println(file.isDirectory());

        File file1 = new File("./testdir/index.hmtl");
        File newfile = new File("./testdir/index.html");
        file1.renameTo(newfile);//对文件重命名，file1是获取的文件对象，newfile是新建的名字，不能直接传递名字！

        File newDir = new File("./testdir/newDir");
        if(!newDir.isDirectory()){//如果newDir是一个文件夹，那么就跳过，如果不是，则创建
            newDir.mkdir();
        }

    }
}
