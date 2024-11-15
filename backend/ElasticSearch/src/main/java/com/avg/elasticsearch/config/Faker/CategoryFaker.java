package com.avg.elasticsearch.config.Faker;

import com.github.javafaker.Faker;
import com.avg.elasticsearch.entities.Category;
import org.springframework.stereotype.Component;

@Component
public class CategoryFaker {

    private final Faker faker;

    public CategoryFaker() {
        this.faker = new Faker();
    }

    // Tạo dữ liệu giả cho Category
    public Category generateCategory() {
        return Category.builder()
                .id(faker.number().numberBetween(1L, 10L))
                .name(faker.options().option("Hành động", "Khoa học viễn tưởng", "Tình cảm", "Hài hước", "Kinh dị", "Lãng mạn", "Phiêu lưu"))  // Dùng Faker để tạo thể loại ngẫu nhiên
                .build();
    }
}