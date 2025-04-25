package com.example.bar.bar.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {
    
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Đăng ký nhiều đường dẫn khả dĩ để đảm bảo có thể truy cập hình ảnh
        registry.addResourceHandler("/public/images/**")
                .addResourceLocations("classpath:/static/public/images/");
        
        registry.addResourceHandler("/images/**")
                .addResourceLocations("classpath:/static/public/images/");
                
        // Nếu bạn có thêm tài nguyên tĩnh khác, có thể thêm ở đây
    }
} 