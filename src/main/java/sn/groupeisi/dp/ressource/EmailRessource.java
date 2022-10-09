package sn.groupeisi.dp.ressource;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor @ToString @Data
public class EmailRessource {
    private String to;
    private String subject;
    private String message;
   
   
    
}
