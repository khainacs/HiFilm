package com.avg.security.config.Swagger;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.modelmapper.ModelMapper;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * author: khainacs
 */
@Configuration
public class SwaggerConfig {
    /**
     * Swagger URL: http://localhost:9001/swagger-ui/index.html#/
     * */
    @Bean
    public OpenAPI customopenAPI(){
        return new OpenAPI().info(new Info().title("BACKEND API DEVELOPED BY KHAINACS")
                                            .version("v1")
                                            .description("API for mapping my application")
                                            .contact(new Contact().name("Support Team")
                                                                    .email("khai.nguyenanh03@gmail.com"))
                                            .license(new License().name("Apache 2.0")
                                                                .url("https://www.apache.org/licenses/LICENSE-2.0")));
    }

    @Bean
    public GroupedOpenApi publicApi(){
        return GroupedOpenApi.builder().group("public")
                                        .displayName("Public API")
                                        .pathsToMatch("/**")
                                        .build();
    }
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}