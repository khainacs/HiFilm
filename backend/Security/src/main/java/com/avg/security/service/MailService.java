package com.avg.security.service;

import jakarta.mail.MessagingException;

public interface MailService {
    void sendMailRegister(String email, String name, String token) throws MessagingException;
    void sendEmailForgotPassword(String email, String name, String token) throws MessagingException;
}
