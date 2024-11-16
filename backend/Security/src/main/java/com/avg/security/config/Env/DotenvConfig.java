package com.avg.security.config.Env;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;

import java.util.Map;
/*
@Author: khainacs
*/
@Configuration
@PropertySource(value = ".env")
public class DotenvConfig implements EnvironmentPostProcessor {

    /**
     * @param environment
     * @param application
     *
     * purpose: tự động tải các biến môi trường từ file .env. Đảm ảo cá biến môi trường từ
     * .env sẽ có sẵn trong toàn bộ ứng dụng
     */
    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        Dotenv dotenv = Dotenv.configure().load();
        dotenv.entries().forEach(entry ->{environment.getPropertySources()
                .addLast(new MapPropertySource("dotenv", Map.of(entry.getKey(), entry.getValue())));});
    }
}
