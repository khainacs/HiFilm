package com.avg.elasticsearch.entities;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Data
@Builder
@Document(indexName = "categories")
public class Category {
    @Id
    private Long id;

    @Field(type = FieldType.Text, name = "name")
    private String name;
}
