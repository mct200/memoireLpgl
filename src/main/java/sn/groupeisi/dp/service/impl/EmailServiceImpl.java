package sn.groupeisi.dp.service.impl;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import sn.groupeisi.dp.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService{
    private final JavaMailSender mailSender;
    public EmailServiceImpl(JavaMailSender mailSender){
        this.mailSender=mailSender;
    }
    @Override
    public void sendEmail(String to, String subject, String message) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom("");
        simpleMailMessage.setTo(to);
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText(message);
        this.mailSender.send(simpleMailMessage);

    }

    
}
