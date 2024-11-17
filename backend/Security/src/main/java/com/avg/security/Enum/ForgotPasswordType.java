package com.avg.security.Enum;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ForgotPasswordType {
    EMAIL_VERIFICATION(1),
    PASSWORD_RESET(2);

    public final int value;

}
