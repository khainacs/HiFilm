package com.avg.elasticsearch.entities;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Data
@Builder
@Document(indexName = "categories")  // Tên index trong Elasticsearch
public class Category {

    @Id
    private Long id;

    private String name;
}
