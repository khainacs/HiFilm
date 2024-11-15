package com.avg.elasticsearch.config;

import com.avg.elasticsearch.config.Faker.FilmFaker;
import com.avg.elasticsearch.consts.ApiPath;
import com.avg.elasticsearch.entities.Film;
import com.avg.elasticsearch.repoElastic.FilmElasticRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Configuration
@RequiredArgsConstructor
public class TransferDb implements CommandLineRunner {

    private final RestTemplate restTemplate;

    private final FilmElasticRepository filmElasticRepository;
    private final FilmFaker filmFaker;


    @Override
    public void run(String... args) throws Exception {


        //Lưu vào elasticsearch
        filmElasticRepository.deleteAll();
        List<Film> films = new ArrayList<>();
        for(Film film : filmFaker.generateFilms(10)) {
            Film filmForElastic = Film.builder()
                    .id(film.getId())
                    .title(film.getTitle())
                    .alias(film.getAlias())
                    .releaseYear(film.getReleaseYear())
                    .country(film.getCountry())
                    .director(film.getDirector())
                    .status(film.getStatus())
                    .episodes(film.getEpisodes())
                    .categories(film.getCategories())
                    .build();
            films.add(filmForElastic);
        }
        filmElasticRepository.saveAll(films);
        // Kiểm tra xem bảng Film có rỗng không
//        List<Film> films = new ArrayList<>();
//        filmElasticRepository.findAll().forEach(films::add);  // Chuyển Iterable thành List
//        if (films.isEmpty()) {
//            // Nếu bảng Film rỗng, tạo dữ liệu giả và lưu vào ElasticSearch
//            List<Film> fakeFilms = new ArrayList<>();
//            for (Film film : filmFaker.generateFilms(10)) {
//                Film filmForElastic = Film.builder()
//                        .id(film.getId())
//                        .title(film.getTitle())
//                        .alias(film.getAlias())
//                        .releaseYear(film.getReleaseYear())
//                        .country(film.getCountry())
//                        .director(film.getDirector())
//                        .status(film.getStatus())
//                        .episodes(film.getEpisodes())
//                        .categories(film.getCategories())
//                        .build();
//                fakeFilms.add(filmForElastic);
//            }
//            filmElasticRepository.saveAll(fakeFilms);
//        }
    }
}
