package sn.groupeisi.dp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import sn.groupeisi.dp.ressource.EmailRessource;
import sn.groupeisi.dp.service.EmailService;

@RestController
public class EmailController {
    private final EmailService emailService;
    public EmailController(EmailService emailService){
        this.emailService=emailService;
    }
    @PostMapping("/send-email")
    public ResponseEntity sendEmail(@RequestBody EmailRessource emailRessource){
        this.emailService.sendEmail(emailRessource.getTo(), emailRessource.getSubject(), emailRessource.getMessage());
        return ResponseEntity.ok("Success");
     
        
    }
}
