package com.avg.elasticsearch.repoElastic;

import com.avg.elasticsearch.entities.Category;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CategoryElasticRepository extends ElasticsearchRepository<Category, Long> {

    // Tìm thể loại theo tên
    Page<Category> findByNameContaining(String name, Pageable pageable);
}
