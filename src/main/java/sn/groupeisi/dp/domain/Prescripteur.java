package sn.groupeisi.dp.domain;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@DiscriminatorValue("Pr")
@Table(name = "prescripteur")
 @NoArgsConstructor @AllArgsConstructor @ToString 
public class Prescripteur extends User implements Serializable{

	    private static final long serialVersionUID = 1L;

	    @Id
	    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
	    @SequenceGenerator(name = "sequenceGenerator")
	    @Column(name = "id")
	    private Long id;

}
