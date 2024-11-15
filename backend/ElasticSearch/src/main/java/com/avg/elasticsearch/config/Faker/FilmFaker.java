package com.avg.elasticsearch.config.Faker;

import com.github.javafaker.Faker;
import com.avg.elasticsearch.entities.Film;
import com.avg.elasticsearch.entities.Category;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class FilmFaker {

    private final Faker faker;
    private final CategoryFaker categoryFaker;

    public FilmFaker(CategoryFaker categoryFaker) {
        this.faker = new Faker();
        this.categoryFaker = categoryFaker;
    }

    // Tạo dữ liệu giả cho Film
    public Film generateFilm(List<Category> categories) {
        return Film.builder()
                .id(faker.number().numberBetween(1L, 10L))
                .title(faker.book().title())  // Tạo tiêu đề phim ngẫu nhiên
                .alias(faker.lorem().sentence())  // Tạo tên khác cho phim
                .releaseYear(faker.number().numberBetween(1980, 2024))  // Tạo năm phát hành ngẫu nhiên
                .director(faker.name().fullName())  // Tạo tên đạo diễn ngẫu nhiên
                .episodes(faker.number().numberBetween(1, 50))  // Tạo số tập ngẫu nhiên
                .status(faker.options().option("Đang chiếu", "Đã hoàn thành", "Sắp chiếu"))  // Trạng thái phim
                .country(faker.country().name())  // Quốc gia sản xuất ngẫu nhiên
                .categories(categories)  // Gán danh sách thể loại cho phim
                .build();
    }

    // Tạo danh sách Film giả
    public List<Film> generateFilms(int numberOfFilms) {
        List<Category> categories = new ArrayList<>();
        List<Film> films = new ArrayList<>();

        // Tạo một số thể loại giả
        for (int i = 0; i < 2; i++) {
            categories.add(categoryFaker.generateCategory());
        }

        // Tạo danh sách Film giả
        for (int i = 0; i < numberOfFilms; i++) {
            films.add(generateFilm(categories));
        }

        return films;
    }
}

