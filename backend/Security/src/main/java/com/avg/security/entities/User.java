package com.avg.security.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.sql.Timestamp;
import java.util.*;
/*
@Author: khainacs
 */

@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Data
/* tự động tạo các phương thức  equals() và hashcode() */
@EqualsAndHashCode(callSuper = true)
/* mặc địch các trường là private */
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    String id;

    @NotBlank(message = "Name cannot be blank")
    @Size(min = 2, max = 255, message = "Name must be have 2 characters")
    @Column(name = "name", nullable = false)
    String name;

    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Email should be valid")
    @Column(name = "email", nullable = false)
    String email;

    @NotBlank(message = "Password cannot be blank")
    @Size(min = 8, message = "Password must be at least 8 characters")
    @Column(name = "password", nullable = false)
    String password;

    @Column(name = "is_active", nullable = false)
    private boolean isActive = false;

    Timestamp emailVerifiedAt;

    String rememberToken;

    @ManyToOne
    @JoinColumn(name = "role_id")
    @JsonBackReference
    private Role role;


}
