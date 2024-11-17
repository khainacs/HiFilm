package com.avg.security.dto;

import com.avg.security.entities.Role;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

@JsonInclude(JsonInclude.Include.NON_NULL)
@EqualsAndHashCode
@Data
public class UserDTO extends BaseObject{
    private String uuid;

    private String name;

    private String email;

    private String password;

    private String accessToken;

    private String refreshToken;

    boolean rememberMe;

    private int role;
}
