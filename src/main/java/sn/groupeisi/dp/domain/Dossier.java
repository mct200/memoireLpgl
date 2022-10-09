package sn.groupeisi.dp.domain;

import java.io.Serializable;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
@Table(name = "dossier")
@NoArgsConstructor @AllArgsConstructor @ToString 
public class Dossier implements Serializable{
	

	    private static final long serialVersionUID = 1L;

	    @Id
	    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
	    @SequenceGenerator(name = "sequenceGenerator")
	    @Column(name = "id")
	    private Long id;

	    @Column(name = "antecedent")
	    private String antecedent;

	    @Column(name = "age")
	    private Integer age;

	    @ManyToOne
	    private Prescripteur prescripteur;
}
