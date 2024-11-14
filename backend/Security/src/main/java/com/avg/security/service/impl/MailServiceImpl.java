package com.avg.security.service.impl;
import com.avg.security.service.MailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring6.SpringTemplateEngine;

import java.nio.charset.StandardCharsets;

@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {

    private final JavaMailSender mailSender;
    private final SpringTemplateEngine templateEngine;
    private final String url = "http://localhost:5173";

    @Override
    public void sendMailRegister(String email, String name, String token) throws MessagingException {
        MimeMessage mineMessage = mailSender.createMimeMessage();
        MimeMessageHelper minMessageHelper = new MimeMessageHelper(mineMessage, true, StandardCharsets.UTF_8.name());
        minMessageHelper.setTo(email);
        minMessageHelper.setSubject("Registration Successful");

        Context thymleafContext = new Context();

        String title = "Congratulations on your successful registration!";
        String message = "Thank you for registering with us. " +
                "Your account has been successfully created and is now ready to use";
        String url = this.url + "/Notify?token=" + token + "&type=verifyEmailSuccess";

        thymleafContext.setVariable("title", title);
        thymleafContext.setVariable("message", message);
        thymleafContext.setVariable("url", url);
        thymleafContext.setVariable("name", name);
        thymleafContext.setVariable("textBtn", "Register Now");

        String htmlBody =  templateEngine.process("mail-template", thymleafContext);
        minMessageHelper.setText(htmlBody, true);

        mailSender.send(mineMessage);
    }

    @Override
    public void sendEmailForgotPassword(String email, String name, String token) throws MessagingException {
        MimeMessage mineMessage = mailSender.createMimeMessage();
        MimeMessageHelper minMessageHelper = new MimeMessageHelper(mineMessage, true, StandardCharsets.UTF_8.name());
        minMessageHelper.setTo(email);
        minMessageHelper.setSubject("Forgot Password");

        Context thymleafContext = new Context();

        String title = "Forgot Password!!!";
        String message = "You have requested to reset your password. Please click the button below to reset your password";
        String url = this.url + "/Notify?token=" + token + "&type=resetPassword";

        thymleafContext.setVariable("title", title);
        thymleafContext.setVariable("message", message);
        thymleafContext.setVariable("url", url);
        thymleafContext.setVariable("name", name);
        thymleafContext.setVariable("textBtn", "Reset Password");

        String htmlBody =  templateEngine.process("mail-template", thymleafContext);
        minMessageHelper.setText(htmlBody, true);

        mailSender.send(mineMessage);
    }
}