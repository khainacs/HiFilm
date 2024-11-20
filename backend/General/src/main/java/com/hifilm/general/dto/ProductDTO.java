package com.hifilm.general.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ProductDTO {
        private long id;
        private String title;
        private String description;
        private Integer rating;
        private long product_detail_id;
        private long category_id;
}
