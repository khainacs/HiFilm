package com.hifilm.general.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ImageDTO {
    private String id;
    private String name;

    private String path;

    private String alt;

    private Long product_id;
}
