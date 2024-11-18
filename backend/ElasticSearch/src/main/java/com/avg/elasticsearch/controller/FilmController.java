package com.avg.elasticsearch.controller;

import co.elastic.clients.elasticsearch.core.SearchResponse;
import co.elastic.clients.elasticsearch.core.search.Hit;
import com.avg.elasticsearch.entities.Film;
import com.avg.elasticsearch.consts.ApiPath;
import com.avg.elasticsearch.repoElastic.FilmElasticRepository;
import com.avg.elasticsearch.response.ResponseFilm;
import com.avg.elasticsearch.service.FilmService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@ResponseBody
@RequiredArgsConstructor
public class FilmController {

    @Autowired
    private FilmService filmService;

    @GetMapping(ApiPath.SEARCH_FILM_API_URL)
    public ResponseEntity<?> findByTitleContaining(
            @RequestParam String title,
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize) {
        ResponseFilm response = filmService.findByTitle(title,pageNumber, pageSize);
        return ResponseEntity.ok(response);
    }

    @GetMapping(ApiPath.SEARCH_ALL_FILM_API_URL)
    public ResponseEntity<?> findAllFilms(
            @RequestParam(defaultValue = "0") int pageNumber,
            @RequestParam(defaultValue = "10") int pageSize) {
        ResponseFilm response = filmService.findAll(pageNumber, pageSize);
        return ResponseEntity.ok(response);
    }
}