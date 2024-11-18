package com.avg.security.entities;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.slf4j.Logger;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@Data
@Getter
@Setter
public class CustomUserDetail implements UserDetails {
    private static final Logger log = org.slf4j.LoggerFactory.getLogger(CustomUserDetail.class);
    private User user;
    private Role role;
    private Map<String, Object> attributes;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority("ROLE_" + user.getRole().getName()));
    }

    public CustomUserDetail(User user) {
        this.user = user;
    }

    public CustomUserDetail(User user, Role role) {
        this.user = user;
        this.role = role;
    }

    public CustomUserDetail(User user, Map<String, Object> attributes) {
        this.user = user;
        this.attributes = attributes != null ? attributes : Map.of();
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return user.isActive();
    }
}