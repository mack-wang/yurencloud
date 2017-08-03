package com.yurencloud.spring;
import org.springframework.stereotype.Component;//用@Component注解来实现类SgtPeppers,以便ComponentScan注解能扫描到该组件

@Component("lonelyHeartsClub")//这个组件默认名字是sgtPeppers,可以在括号中添加自定义的名字。
public class SgtPeppers implements CompactDisc{
    private String title = "Sgt. Peper's Lonely Hearts Club Band";
    private String artist = "The Beatles";

    public void play(){
        System.out.println("Playing "+title+" by "+artist);
    }
}
