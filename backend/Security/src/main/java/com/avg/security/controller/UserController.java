package com.avg.security.controller;

import com.avg.security.Enum.AuthenCode;
import com.avg.security.Enum.ErrorCode;
import com.avg.security.consts.ApiPath;
import com.avg.security.dto.*;
import com.avg.security.repository.UserRepository;
import com.avg.security.response.ResponseHandler;
import com.avg.security.response.UserResponseDTO;
import com.avg.security.service.AuthenticationService;
import com.google.protobuf.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.DisabledException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ResponseBody
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping(ApiPath.USER_REGISTER)
    public ResponseEntity<?> register(@RequestBody UserDTO userDTO){
        String message = "";
        try{
            UserResponseDTO response = authenticationService.register(userDTO);
            if (response.getTokenType() == AuthenCode.EMAIL_ALREADY_REGISTERED){
                message = "Account is already registered";
                return ResponseHandler.responseBuilder(message, ErrorCode.UNAUTHORIZED.getStatus());
            }
            message = "Account is successfully registered";
            return ResponseHandler.responseOk(message, response);
        }catch (DisabledException e){
            message = "Account is already registered";
            return ResponseHandler.responseBuilder(message, ErrorCode.UNAUTHORIZED.getStatus());
        }
    }

    @PostMapping(ApiPath.USER_AUTHENTICATE)
    public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO){
        String message = "";
        try{
            UserResponseDTO response = authenticationService.authenticate(userDTO);
            if (response.getTokenType() == AuthenCode.ACCOUNT_NOT_ACTIVATED){
                message = "Account is not activated";
                return ResponseHandler.responseBadRequest(message);
            }
            message = "Account authenticated successfully";
            return ResponseHandler.responseOk(message, response);
        }catch (DisabledException e){
            message = "Account is not activated";
            return ResponseHandler.responseBadRequest(message);
        }catch (Exception e){
            message = "Email or Password is incorrect";
            return ResponseHandler.responseBadRequest(message, ErrorCode.UNAUTHORIZED.getStatus());
        }
    }

    @PostMapping(ApiPath.USER_CONFIRM_EMAIL)
    public ResponseEntity<?> confirm(@RequestBody ConfirmEmailRequest request){
        return null;
    }

    @PostMapping(ApiPath.USER_FORGOT_PASSWORD)
    public ResponseEntity<?> forgotPassword(@RequestBody PasswordResetTokenRequest request){
        return null;
    }

    @PostMapping(ApiPath.USER_CHANGE_PASSWORD)
    public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request){
        return null;
    }

    @PostMapping(ApiPath.GET_CURRENT_USER)
    public ResponseEntity<?> getCurrentUser(@RequestBody AccessTokenRequest request){
        UserResponseDTO response = authenticationService.getCurrentUserByAccessToken(request.getToken());
        return ResponseHandler.responseOk("Profile retrieved successfully", response);
    }
}
