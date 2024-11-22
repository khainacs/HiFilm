package com.hifilm.general.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AboutDTO extends BaseObject{
    private String title;
    private String nameCompany;
    private String address;
    private String iframeGoogleMap;
    private String phone;
    private String email;
    private String website;
    private String description;
}
