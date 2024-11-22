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

    public Film generateFilm(List<Category> categories) {
        return Film.builder()
                .id(faker.number().numberBetween(1L, 10L))
                .title(faker.book().title())
                .alias(faker.lorem().sentence())
                .releaseYear(faker.number().numberBetween(1980, 2024))
                .director(faker.name().fullName())
                .episodes(faker.number().numberBetween(1, 50))
                .status(faker.options().option("Đang chiếu", "Đã hoàn thành", "Sắp chiếu"))
                .country(faker.country().name())
                .categories(categories)
                .build();
    }


    public List<Film> generateFilms(int numberOfFilms) {
        List<Category> categories = new ArrayList<>();
        List<Film> films = new ArrayList<>();

        for (int i = 0; i < 2; i++) {
            categories.add(categoryFaker.generateCategory());
        }

        for (int i = 0; i < numberOfFilms; i++) {
            films.add(generateFilm(categories));
        }

        return films;
    }
}

