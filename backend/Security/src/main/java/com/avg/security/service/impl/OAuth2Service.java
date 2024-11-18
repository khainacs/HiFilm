package com.avg.security.service.impl;

import com.avg.security.entities.*;
import com.avg.security.exception.OAuth2AuthenticationProcessingException;
import com.avg.security.repository.RoleRepository;
import com.avg.security.repository.UserRepository;
import com.avg.security.service.MailService;
import com.avg.security.service.TokenService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class OAuth2Service extends DefaultOAuth2UserService{
    private static final Logger log = LoggerFactory.getLogger(OAuth2Service.class);
    @Value("${CLIENT_GOOGLE_ID}")
    private String CLIENT_GOOGLE_ID;

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final MailService emailService;
    private final JwtService jwtService;
    private final TokenService tokenService;

    @PostConstruct
    private void init() {
        if (CLIENT_GOOGLE_ID == null) {
            throw new IllegalArgumentException("CLIENT_GOOGLE_ID environment variable is not set");
        }
    }

    @Override
    public OAuth2User loadUser(OAuth2UserRequest oAuth2UserRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(oAuth2UserRequest);

        try {
            return processOAuth2User(oAuth2UserRequest, oAuth2User);
        } catch (Exception ex) {
            // Throwing an instance of AuthenticationException will trigger the OAuth2AuthenticationFailureHandler
            throw new InternalAuthenticationServiceException(ex.getMessage(), ex.getCause());
        }
    }

    private OAuth2User processOAuth2User(OAuth2UserRequest oAuth2UserRequest, OAuth2User oAuth2User) {
        Oauth2UserInfo oAuth2UserInfo = OAuth2UserInfoFactory.getOAuth2UserInfo(
                oAuth2UserRequest.getClientRegistration().getRegistrationId(),
                oAuth2User.getAttributes()
        );

        if (StringUtils.isEmpty(oAuth2UserInfo.getEmail())) {
            throw new OAuth2AuthenticationProcessingException("Email not found from OAuth2 provider");
        }

        Optional<User> userOptional = userRepository.findByEmail(oAuth2UserInfo.getEmail());
        User user = userOptional.orElseGet(() -> registerNewUser(oAuth2UserInfo));

        // Truyền cả user và role để giữ nguyên constructor
        Role role = user.getRole();
        CustomUserDetail customUserDetail = new CustomUserDetail(user, role);
        customUserDetail.setAttributes(oAuth2User.getAttributes());
        return (OAuth2User) customUserDetail;
    }

    private User registerNewUser(Oauth2UserInfo oAuth2UserInfo) {
        String email = oAuth2UserInfo.getEmail();
        String fullName = oAuth2UserInfo.getName();

        Role role = roleRepository.findById(1)
                .orElse(roleRepository.findFirstByOrderByIdAsc());

        String password = "AVG_" + new Random().nextInt(1000) + "_HIFILM";

        String passwordEnc = passwordEncoder.encode(password);
        User userRegister = new User();
        userRegister.setActive(true);
        userRegister.setEmail(email);
        userRegister.setPassword(passwordEnc);
        userRegister.setRole(role);
        userRepository.save(userRegister);

        try {
            System.out.println("Send mail : " + email + " ; full name : " + fullName + " ; password : " + password);
            emailService.sendEmailRegisterWithPassword(email, fullName, password);
        } catch (Exception e) {
            System.out.println("error send mail: " + e.getMessage());
        }
        return userRepository.save(userRegister);
    }
}
