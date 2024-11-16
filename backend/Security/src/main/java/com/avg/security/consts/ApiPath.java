package com.avg.security.consts;

public interface ApiPath {
    /**
     * Swagger URL
     * ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
     * http://localhost:9001/swagger-ui/index.html#/
     * */

    String API = "/api/v1";
    //http://localhost:9001/api/v1

    //Ping
    String PING = API + "/ping";

    //Auth
    String AUTH = API + "/auth";
    String USER_LOGIN = AUTH + "/login";
    String USER_REGISTER = AUTH + "/register";
    String USER_AUTHENTICATE = AUTH + "/authenticate";
    String USER_CONFIRM_EMAIL = AUTH + "/confirm-email";
    String USER_FORGOT_PASSWORD = API + "/forgot-password";
    String USER_CHANGE_PASSWORD = API + "/change-password";
    String GET_CURRENT_USER = API + "/get-current-user";
    String LOGOUT = API + "/logout";
}
