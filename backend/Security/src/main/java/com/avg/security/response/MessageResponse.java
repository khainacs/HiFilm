package com.avg.security.response;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Builder
public class MessageResponse {
    @JsonProperty("message")
    private String message;
    @JsonProperty("type")
    private HttpStatus type;

}