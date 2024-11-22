package com.hifilm.general.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.hifilm.general.entities.Product;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CategoryDTO {
    private Long id;
    private String name;
    private String slug;
    private List<Integer> product;
}
