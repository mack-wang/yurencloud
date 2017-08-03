package spittr.config;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;


//项目初始化时，启动此文件
public class SpittrWebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {
    @Override
    protected String[] getServletMappings() {//得到请求的url
        return new String[]{"/"};
    }

    @Override
    protected Class<?>[] getRootConfigClasses() {//加载RootConfig类中的配置
        return new Class<?>[]{RootConfig.class};
    }

    @Override
    protected Class<?>[] getServletConfigClasses() {//加载WebConfig类中的配置
        return new Class<?>[]{WebConfig.class};
    }
}
