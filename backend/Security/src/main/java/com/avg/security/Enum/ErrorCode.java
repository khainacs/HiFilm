package com.avg.security.Enum;
import org.springframework.http.HttpStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    INVALID_ID(1, "Invalid id",HttpStatus.BAD_REQUEST),
    UNCATEGORIZED_EXCEPTION(9999, "Uncategorized error",HttpStatus.INTERNAL_SERVER_ERROR),
    INVALID_KEY(100, "Invalid key",HttpStatus.BAD_REQUEST),
    USER_EXISTED(101, "User existed",HttpStatus.BAD_REQUEST),
    USER_NOT_FOUND(102, "User not found",HttpStatus.NOT_FOUND),
    INVALID_INPUT(103, "Invalid input provided",HttpStatus.BAD_REQUEST),
    PERMISSION_DENIED(104, "Permission denied",HttpStatus.FORBIDDEN),
    RESOURCE_NOT_AVAILABLE(105, "Resource not available",HttpStatus.NOT_FOUND),
    OPERATION_FAILED(106, "Operation failed",HttpStatus.INTERNAL_SERVER_ERROR),
    DATABASE_ERROR(107, "Database error",HttpStatus.INTERNAL_SERVER_ERROR),
    UNAUTHENTICATED(108, "Authentication failed",HttpStatus.UNAUTHORIZED),
    EMAIL_ALREADY_EXISTS(109, "Email already exists",HttpStatus.BAD_REQUEST),
    USERNAME_ALREADY_EXISTS(110, "Username already exists",HttpStatus.BAD_REQUEST),
    PASSWORD_TOO_WEAK(111, "Password too weak",HttpStatus.BAD_REQUEST),
    SESSION_EXPIRED(112, "Session expired",HttpStatus.UNAUTHORIZED),
    CONFLICT(113, "Conflict occurred",HttpStatus.CONFLICT),
    SERVICE_UNAVAILABLE(114, "Service temporarily unavailable",HttpStatus.SERVICE_UNAVAILABLE),
    USER_NOT_EXISTED(115, "User not exist",HttpStatus.NOT_FOUND),
    USER_NOT_AUTHENTICATED(116, "User not authenticated",HttpStatus.UNAUTHORIZED),
    ROLE_EXISTED(117, "Role existed",HttpStatus.BAD_REQUEST),
    TOKEN_EXPIRED(124,"Token expired",HttpStatus.UNAUTHORIZED),
    UNAUTHORIZED(125,"You don't have permission",HttpStatus.UNAUTHORIZED),
    NOT_FOUND(126,"Object Not Found",HttpStatus.NOT_FOUND ),
    INVALID_REQUEST(127,"Invalid Request",HttpStatus.BAD_REQUEST),
    FIELD_INVALID(128,"Invalid Field",HttpStatus.BAD_REQUEST),
    EMAIL_ALREADY_USED(129,"Email already used",HttpStatus.BAD_REQUEST),
    INVALID_PASSWORD(130,"Invalid Password",HttpStatus.BAD_REQUEST),
    AUTHORITY_EXISTS(131,"Authority already exists",HttpStatus.BAD_REQUEST),
    ENTITY_EXISTS(132,"Entity already exists",HttpStatus.BAD_REQUEST),
    LOGIN_ALREADY_USED(133,"Login already used",HttpStatus.BAD_REQUEST),;


    private int code ;
    private String message;
    private HttpStatus status;
}
