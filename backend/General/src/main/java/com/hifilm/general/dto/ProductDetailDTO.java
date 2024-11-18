package com.hifilm.general.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDetailDTO extends BaseObject{
    private long id;
    private String title;
    private String description;
    private Integer rating;
    private Long product_id;
    private Long movie_id;
    private List<Long> images;
}
