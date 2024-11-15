package com.avg.elasticsearch.entities;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import java.util.List;

@Data
@Builder
@Document(indexName = "films")  // Tên index trong Elasticsearch
public class Film {

    @Id
    private Long id;

    private String title;
    private String alias;
    private Integer releaseYear;
    private String director;
    private Integer episodes;
    private String status;
    private String country;
    private List<Category> categories;  // Lưu thông tin các thể loại liên quan
}
