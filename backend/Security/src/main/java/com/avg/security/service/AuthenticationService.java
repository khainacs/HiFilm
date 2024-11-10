package com.avg.security.service;


import com.avg.security.Enum.ForgotPasswordType;
import com.avg.security.dto.UserDTO;
import com.avg.security.entities.User;
import com.avg.security.response.ResponseDTO;
import com.avg.security.response.UserResponseDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface AuthenticationService {
    void setPasswordResetToken(User user, ForgotPasswordType type, String token);
    UserResponseDTO register(UserDTO userDTO );
    UserResponseDTO authenticate(UserDTO userDTO);
    void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
    ResponseDTO<User> confirm(String token);
    UserResponseDTO getCurrentUserByAccessToken(String token);
    ResponseDTO<User> forgotPassword(String email);
    ResponseDTO<User> changePassword(String token, String password);
}
