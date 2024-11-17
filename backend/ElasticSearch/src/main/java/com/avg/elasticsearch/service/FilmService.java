package com.avg.elasticsearch.service;

import com.avg.elasticsearch.entities.Film;
import com.avg.elasticsearch.response.ResponseFilm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface FilmService {
    ResponseFilm findByTitle(String title, int pageNumber, int pageSize);
    ResponseFilm findAll(int pageNumber, int pageSize);
}
