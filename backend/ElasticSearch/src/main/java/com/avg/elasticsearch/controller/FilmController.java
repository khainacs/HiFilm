package com.avg.elasticsearch.controller;

import com.avg.elasticsearch.entities.Film;
import com.avg.elasticsearch.repoElastic.FilmElasticRepository;
import com.avg.elasticsearch.consts.ApiPath;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
@RequiredArgsConstructor
public class FilmController {

    @Autowired
    private FilmElasticRepository filmElasticRepository;

    // Tìm phim theo tiêu đề
    @GetMapping(ApiPath.SEARCH_FILM_API_URL)
    public ResponseEntity<Page<Film>> findByTitleContaining(
            @RequestParam String title,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Film> films = filmElasticRepository.findByTitleContaining(title, pageable);
        return ResponseEntity.ok(films);
    }
    // Tìm tất cả phim
    @GetMapping(ApiPath.SEARCH_ALL_FILM_API_URL)
    public ResponseEntity<Page<Film>> findAllFilms(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Pageable pageable = PageRequest.of(page, size);
        Page<Film> films = filmElasticRepository.findAll(pageable);
        return ResponseEntity.ok(films);
    }
//    // Tìm phim theo năm phát hành
//    @GetMapping(ApiPath.FILM_API_URL + "/search/year")
//    public ResponseEntity<Page<Film>> findByReleaseYear(
//            @RequestParam Integer releaseYear,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size) {
//
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Film> films = filmElasticRepository.findByReleaseYear(releaseYear, pageable);
//        return ResponseEntity.ok(films);
//    }
//
//    // Tìm phim theo trạng thái
//    @GetMapping(ApiPath.FILM_API_URL + "/search/status")
//    public ResponseEntity<Page<Film>> findByStatus(
//            @RequestParam String status,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size) {
//
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Film> films = filmElasticRepository.findByStatus(status, pageable);
//        return ResponseEntity.ok(films);
//    }
//
//    // Tìm phim theo quốc gia sản xuất
//    @GetMapping(ApiPath.FILM_API_URL + "/search/country")
//    public ResponseEntity<Page<Film>> findByCountry(
//            @RequestParam String country,
//            @RequestParam(defaultValue = "0") int page,
//            @RequestParam(defaultValue = "10") int size) {
//
//        Pageable pageable = PageRequest.of(page, size);
//        Page<Film> films = filmElasticRepository.findByCountry(country, pageable);
//        return ResponseEntity.ok(films);
//    }
}