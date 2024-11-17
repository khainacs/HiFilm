package com.avg.security.entities;

import com.avg.security.Enum.ForgotPasswordType;
import com.avg.security.dto.BaseObject;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "password_reset_tokens")
public class PasswordResetToken extends BaseObject {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(nullable = false)
    private String token;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private Timestamp expiryDate;

    @Column(name = "is_activated", nullable = false)
    private boolean isActivated = false;

    @Column(nullable = false)
    private int type = ForgotPasswordType.EMAIL_VERIFICATION.value;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false, name = "user_id")
    private User user;

}
