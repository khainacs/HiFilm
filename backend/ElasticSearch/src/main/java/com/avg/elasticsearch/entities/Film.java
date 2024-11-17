package com.avg.elasticsearch.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.util.List;

@Data
@Builder
@Document(indexName = "films")
public class Film {

    @Id
    private Long id;

    @Field(name = "title", type = FieldType.Text, analyzer = "standard")
    private String title;

    @Field(type = FieldType.Text, name = "alias")
    private String alias;

    @Field(type = FieldType.Text, name = "releaseYear")
    private Integer releaseYear;

    @Field(type = FieldType.Text, name = "director")
    private String director;

    @Field(type = FieldType.Text, name = "episodes")
    private Integer episodes;

    @Field(type = FieldType.Text, name = "status")
    private String status;

    @Field(type = FieldType.Text, name = "country")
    private String country;

    @Field(type = FieldType.Nested)
    private List<Category> categories;
}
