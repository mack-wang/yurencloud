#### 1、maven打包出错解决方法
~~~
//web.xml的文件路径未指明
Failed to execute goal org.apache.maven.plugins:maven-war-plugin:2.2:war
~~~
~~~
//在build plugins中加下面这个，忽略web.xml
<plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-war-plugin</artifactId>
        <configuration>
            <failOnMissingWebXml>false</failOnMissingWebXml>
        </configuration>
</plugin>
~~~