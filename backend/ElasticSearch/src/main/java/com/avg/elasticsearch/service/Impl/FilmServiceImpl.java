package com.avg.elasticsearch.service.Impl;

import com.avg.elasticsearch.entities.Film;
import com.avg.elasticsearch.repoElastic.FilmElasticRepository;
import com.avg.elasticsearch.response.ResponseFilm;
import com.avg.elasticsearch.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FilmServiceImpl implements FilmService {
    @Autowired
    private FilmElasticRepository filmElasticRepository;

    @Override
    public ResponseFilm findByTitle(String title, int pageNumber, int pageSize) {
        ResponseFilm responseFilm = new ResponseFilm();
        if(title == null || title.isEmpty()){
            responseFilm.setMessage("Title is required");
            responseFilm.setErrorCode(403);
            return responseFilm;
        }
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        responseFilm.setPages(filmElasticRepository.findByTitleContaining(title.toLowerCase(), pageable));

        return responseFilm;
    }

    @Override
    public ResponseFilm findAll( int pageNumber, int pageSize) {
        ResponseFilm responseFilm = new ResponseFilm();
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        responseFilm.setPages(filmElasticRepository.findAll(pageable));
        return responseFilm;
    }
}
