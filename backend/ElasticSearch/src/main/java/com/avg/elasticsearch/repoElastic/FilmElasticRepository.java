package com.avg.elasticsearch.repoElastic;

import com.avg.elasticsearch.entities.Film;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FilmElasticRepository extends ElasticsearchRepository<Film, Long> {

//     Tìm phim theo tiêu đề chứa từ khóa
    @Query("{\"bool\": {\"must\": [{\"wildcard\": {\"title\": \"*?0*\"}}]}}")
    Page<Film> findByTitleContaining(String title, Pageable pageable);





//    // Tìm phim theo năm phát hành
//    @Query("{\"match\": {\"releaseYear\": {\"query\": \"?0\"}}}")
//    Page<Film> findByReleaseYear(Integer releaseYear, Pageable pageable);
//
//    // Tìm phim theo trạng thái
//    @Query("{\"match\": {\"status\": {\"query\": \"?0\"}}}")
//    Page<Film> findByStatus(String status, Pageable pageable);
//
//    // Tìm phim theo quốc gia sản xuất
//    @Query("{\"match\": {\"country\": {\"query\": \"?0\"}}}")
//    Page<Film> findByCountry(String country, Pageable pageable);
}