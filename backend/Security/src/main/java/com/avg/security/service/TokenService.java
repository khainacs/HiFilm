package com.avg.security.service;

import com.avg.security.entities.User;

public interface TokenService {
    void revokedAllUserTokens(User user);
    void saveUserToken(User user, String jwtToken);
    User getUserByToken(String token);
}
