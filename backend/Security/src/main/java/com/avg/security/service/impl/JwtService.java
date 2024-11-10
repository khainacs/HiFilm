package com.avg.security.service.impl;

import com.avg.security.entities.User;
import io.github.cdimascio.dotenv.Dotenv;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

/*
* @author: khainacs
* */
@Slf4j
@Service
public class JwtService {
    private final String JWT_SECRET;
    private final long JWT_EXPIRATION = 24 * 60 * 60 * 1000;
    private final long JWT_REFRESH_EXPIRATION = 30L * 24 * 60 * 60 * 1000;

    @Autowired
    public JwtService(){
        Dotenv dotenv = Dotenv.load();
        this.JWT_SECRET = dotenv.get("JWT_SECRET");

        if(JWT_SECRET == null){
            throw new IllegalArgumentException("JWT_SECRET environment variable is not set");
        }
    }

    public String getToken (HttpServletRequest request) {

        final String bearerToken = request.getHeader("Authorization");

        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer "))
        {return bearerToken.substring(7,bearerToken.length()); } // The part after "Bearer "
        return null;
    }

    public String generateRefreshToken(User user){
        String token = Jwts
                .builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_REFRESH_EXPIRATION))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
        return token;
    }

    /**
     * @param token
     * @return reset làm cho token hết hạn luôn
     */
    public String resetTokenExpiration(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(getSignInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(new Date(System.currentTimeMillis() - 1000)) //hết hạn luôn
                .signWith(getSignInKey(), SignatureAlgorithm.HS512)
                .compact();
    }

    public String generateToken(User user){
        String token = Jwts
                .builder()
                .setSubject(user.getEmail())
                .claim("role", user.getRole())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_EXPIRATION))
                .signWith(getSignInKey())
                .compact();

        return token;
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Date extractExpiration(String token){
        return extractClaim(token, Claims::getExpiration);
    }

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public Boolean isTokenExpired(String token){
        return extractExpiration(token).before(new Date());
    }

    public Boolean isTokenValid(String token, UserDetails userDetails){
        String email = extractUsername(token);
        return email.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

   private SecretKey getSignInKey(){
        byte[] keyBytes = Decoders.BASE64.decode(JWT_SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
   }

   public boolean validateToken(String token){
        try{
            Jwts.parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token);
            return true;
        } catch (SignatureException e) {
            log.info("Invalid JWT signature.");
            log.trace("Invalid JWT signature trace: {}", e);
        } catch (MalformedJwtException e) {
            log.info("Invalid JWT token.");
            log.trace("Invalid JWT token trace: {}", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT token.");
            log.trace("Expired JWT token trace: {}", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT token.");
            log.trace("Unsupported JWT token trace: {}", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT token compact of handler are invalid.");
            log.trace("JWT token compact of handler are invalid trace: {}", e);
        }
        return false;
   }
}
