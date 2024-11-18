package com.avg.elasticsearch.repoElastic;

import com.avg.elasticsearch.entities.Film;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface FilmElasticRepository extends ElasticsearchRepository<Film, Long> {

    @Query("{\"bool\": {\"must\": [{\"wildcard\": {\"title\": \"*?0*\"}}]}}")
    Page<Film> findByTitleContaining(String title, Pageable pageable);

}