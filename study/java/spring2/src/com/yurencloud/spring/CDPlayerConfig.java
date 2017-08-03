package com.yurencloud.spring;
import org.springframework.context.annotation.ComponentScan;//引入ComponentScan扫描
import org.springframework.context.annotation.Configuration;//引入注释设置


@Configuration
@ComponentScan(basePackages = "com.yurencloud.spring")//
public class CDPlayerConfig {
}
