package sn.groupeisi.dp.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import lombok.AllArgsConstructor;

import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "secretaire")
@NoArgsConstructor @AllArgsConstructor @ToString 
public class Secretaire extends User implements Serializable{
	    private static final long serialVersionUID = 1L;

	    @Id
		@GeneratedValue(strategy=GenerationType.AUTO)
	   	@Column(name = "id")
	    private Long id;


}
