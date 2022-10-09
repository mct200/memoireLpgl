package sn.groupeisi.dp.domain;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.MappedSuperclass;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@MappedSuperclass
@Data @NoArgsConstructor @AllArgsConstructor @ToString 
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorColumn(name="user_type")
public  abstract class User {
	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	    private Long id;
	  	private String Nom;
	  	private String Prenom;
	  	private String Addresse;
	  	private String Telephone;
	  	private String Fonction;
	  	
	
		public Object getUserName() {
			return null;
		}
        public Object getPassword() {
            return null;
        }
	  
}
