package com.avg.security.service.impl;

import com.avg.security.Enum.AuthenCode;
import com.avg.security.Enum.ForgotPasswordType;
import com.avg.security.dto.UserDTO;
import com.avg.security.entities.CustomUserDetail;
import com.avg.security.entities.PasswordResetToken;
import com.avg.security.entities.Role;
import com.avg.security.entities.User;
import com.avg.security.mapper.UserMapper;
import com.avg.security.repository.PasswordResetTokenRepository;
import com.avg.security.repository.RoleRepository;
import com.avg.security.repository.UserRepository;
import com.avg.security.response.MessageResponse;
import com.avg.security.response.ResponseDTO;
import com.avg.security.response.UserResponseDTO;
import com.avg.security.service.AuthenticationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

/*
* @author: khainacs
* */

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final JwtService jwtService;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordResetTokenRepository passwordResetTokenRepository;
    private final MailServiceImpl mailService;

    @Override
    public void setPasswordResetToken(User user, ForgotPasswordType type  ,String token){
        long expiration = 24 * 60 * 60 * 1000;
        PasswordResetToken passwordResetToken = new PasswordResetToken();
        passwordResetToken.setToken(token);
        Timestamp expiryDate = new Timestamp(new Date().getTime() + expiration);
        passwordResetToken.setExpiryDate(expiryDate);
        passwordResetToken.setType(type.value);
        passwordResetToken.setUser(user);
        passwordResetTokenRepository.saveAndFlush(passwordResetToken);
    }


    /**
     * @param userDTO
     * @return userResponseDTO
     * This function is designed to handle register
     * B1: check existence email
     * B2: initial token
     * B3: send Email
     * B4: return user response dto
     */
    @Override
    public UserResponseDTO register(UserDTO userDTO) {
        if (userRepository.findByEmail(userDTO.getEmail()).isPresent()){
            return UserResponseDTO.builder().tokenType(AuthenCode.EMAIL_ALREADY_REGISTERED).build();
        }
        Optional<Role> role = roleRepository.findById(userDTO.getRole());

        User user = new User();
        user.setActive(false);
        user.setName(userDTO.getName());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setRole(role.get());
        userRepository.saveAndFlush(user);

        String token = "AVG_" + UUID.randomUUID() + System.currentTimeMillis() + "_VNLAW";
        setPasswordResetToken(user, ForgotPasswordType.EMAIL_VERIFICATION, token);
        try{
            //Send Email
        }catch (Exception e){
            System.out.println("Error Send Mail: " + e.getMessage());
        }

        UserResponseDTO response = new UserResponseDTO();
        response.setAccessToken(null);
        response.setTokenType(null);
        response.setTokenType(AuthenCode.OK);
        return  response;


    }

    /**
     * @param userDTO
     * @return
     * This function is designed to handle repeat login
     * B1: check existence email and password
     * B2: create customUserDetail
     * B3: create token
     * B4: return user response dto
     */
    @Override
    public UserResponseDTO authenticate(UserDTO userDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userDTO.getEmail(),
                        userDTO.getPassword())
        );
        User user = userRepository.findByEmail(userDTO.getEmail()).orElseThrow();
        CustomUserDetail customUserDetail = new CustomUserDetail(user);
        if (!customUserDetail.isEnabled()){
            return UserResponseDTO.builder().tokenType(AuthenCode.ACCOUNT_NOT_ACTIVATED).build();
        }

        String accessToken = jwtService.generateToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        return UserResponseDTO
                .builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole().getName())
                .tokenType(AuthenCode.OK)
                .build();

    }

    /**
     * @param request
     * @param response
     * @throws IOException
     * this function is designed to handle the refreshment of JWT tokens.
     * B1: extracting the authorization header
     * B2: extracting the refresh token
     * B3: extracting the email from email
     * B4: Preparing the Response: Writes the response object to the HTTP response's output stream as JSON using ObjectMapper.
     */
    @Override
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final String authHeader = request.getHeader("Authorization");
        final String refreshToken;
        final String email;
        if(authHeader == null || !authHeader.startsWith("Bearer")){
            return;
        }
        refreshToken = authHeader.substring(7);
        email = jwtService.extractUsername(refreshToken);
        if (email != null){
            User user = userRepository.findByEmail(email).orElseThrow();
            CustomUserDetail customUserDetail = new CustomUserDetail(user);
            if (jwtService.isTokenValid(refreshToken, customUserDetail)){
               String accessToken = jwtService.generateToken(user);
               var authResponse = UserResponseDTO
                                       .builder()
                                       .accessToken(accessToken)
                                       .refreshToken(refreshToken)
                                       .build();
               new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }

    /**
     * @param token
     * @return
     * This function is designed to handle verify from email
     */
    @Override
    public MessageResponse confirm(String token) {
        PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token).orElse(null);
        if(passwordResetToken == null || passwordResetToken.getExpiryDate().before(new Date())){
            return MessageResponse.builder().type(HttpStatus.BAD_REQUEST).message("Token is expired").build();
        }

        passwordResetToken.setActivated(true);
        passwordResetToken.getUser().setActive(true);
        passwordResetTokenRepository.save(passwordResetToken);
        return  MessageResponse.builder()
                                .type(HttpStatus.OK)
                                .message("Email verified successfully")
                                .build();
    }


    /**
     * @param token
     * @return
     * This function is designed to get current user
     */
    @Override
    public UserResponseDTO getCurrentUserByAccessToken(String token) {
        String email = jwtService.extractUsername(token);
        User user = userRepository.findByEmail(email).orElseThrow();

        return UserResponseDTO.builder()
                .email(user.getEmail())
                .name(user.getName())
                .role(user.getRole().getName())
                .build();

    }

    /**
     * @param email
     * @return This function is designed to handle process forgot password
     */
    @Override
    public MessageResponse forgotPassword(String email) {
        if(email == null || email.isEmpty()){
            return MessageResponse.builder()
                                    .type(HttpStatus.BAD_GATEWAY)
                                    .message("Email is required")
                                    .build();
        }

        User user = userRepository.findByEmail(email).orElse(null);
        if(user == null){
            return MessageResponse.builder()
                                    .type(HttpStatus.BAD_GATEWAY)
                                    .message("Email is not exist")
                                    .build();
        }

        String token = "AVG_" + UUID.randomUUID() + System.currentTimeMillis() + "_HIFILM";
        setPasswordResetToken(user, ForgotPasswordType.PASSWORD_RESET, token);

        try{
            mailService.sendEmailForgotPassword(user.getEmail(), user.getName(), token);
        }catch (Exception e){
            System.out.println("Error Send Mail: " + e.getMessage());
            return MessageResponse.builder()
                                    .type(HttpStatus.BAD_GATEWAY)
                                    .message("Error Send Mail")
                                    .build();
        }

        return MessageResponse.builder()
                .type(HttpStatus.OK)
                .message("Email sent successfully")
                .build();
    }



    /**
     * @param token
     * @param password
     * @return
     * This function is designed to handle change password in profile
     */
    @Override
    public MessageResponse changePassword(String token, String password) {
        if (token == null || password == null || token.isEmpty() || password.isEmpty()){
            return MessageResponse.builder().type(HttpStatus.BAD_REQUEST).message("Invalid token or password").build();
        }

        PasswordResetToken passwordResetToken = passwordResetTokenRepository.findByToken(token).orElse(null);
        if (passwordResetToken == null
                || passwordResetToken.getExpiryDate().before(new Date())
                || passwordResetToken.isActivated()){
            return MessageResponse.builder().type(HttpStatus.BAD_REQUEST).message("Invalid token").build();
        }

        User user = passwordResetToken.getUser();
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
        passwordResetToken.setActivated(true);
        passwordResetTokenRepository.save(passwordResetToken);

        return MessageResponse.builder()
                                .type(HttpStatus.OK)
                                .message("Password changed successfully")
                                .build();
    }
}
