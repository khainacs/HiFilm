package com.hifilm.general.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;

@Data
@EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MovieDTO {
    private long id;
    private String path;
    private Date last_time;
    private long product_detail_id;
}
