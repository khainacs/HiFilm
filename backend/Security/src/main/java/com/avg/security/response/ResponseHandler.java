package com.avg.security.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseHandler {
    public static ResponseEntity<Object> responseBuilder(
            String message, HttpStatus httpStatus, Object responeObject
    ){
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);
        response.put("httpStatus", httpStatus);
        response.put("data", responeObject);

        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> responseBuilder(
            String message, HttpStatus httpStatus
    ){
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);
        response.put("httpStatus", httpStatus);

        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<Object> responseOk(
            String message, Object responeObject
    ){
        HttpStatus httpStatus = HttpStatus.OK;
        return responseBuilder(message, httpStatus, responeObject);
    }

    public static ResponseEntity<Object> responseBadRequest(
            String message, Object responeObject
    ){
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
        return responseBuilder(message, httpStatus, responeObject);
    }

    public static ResponseEntity<Object> responseBadRequest(
            String message
    ){
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
        return responseBuilder(message, httpStatus);
    }
}
