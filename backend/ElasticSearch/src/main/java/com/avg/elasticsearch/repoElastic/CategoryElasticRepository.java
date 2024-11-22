package com.avg.elasticsearch.repoElastic;

import com.avg.elasticsearch.entities.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface CategoryElasticRepository extends ElasticsearchRepository<Category, Long> {

    Page<Category> findByNameContaining(String name, Pageable pageable);
}
