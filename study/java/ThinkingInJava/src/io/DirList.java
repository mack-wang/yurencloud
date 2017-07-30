package io;
import java.util.regex.*;
import java.io.*;
import java.util.*;
public class DirList {
    public static void main(String[] args) {
        File path = new File(".");//这是项目的绝对路径即ThinkingInJava  可以是目录，也可以是文件
        String[] list;
        if(args.length == 0)
            list = path.list();//如果没有参数，则默认获取当前目前下的所有文件列表
        else
            list = path.list(new DirFilter(args[0]));//若有参数，则新建文件筛选对象，并传入参数
        Arrays.sort(list,String.CASE_INSENSITIVE_ORDER);//按字符串大小写忽略排序
        for(String dirItem :list )//遍历
            System.out.println(dirItem);
    }
}

class DirFilter implements FilenameFilter {
    private Pattern pattern;//私有的正则对象
    public DirFilter(String regex){
        pattern = pattern.compile(regex);//正则规则
    }

    public boolean accept(File dir, String name){
        return pattern.matcher(name).matches();
    }
}