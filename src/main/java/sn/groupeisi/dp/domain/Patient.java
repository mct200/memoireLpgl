package sn.groupeisi.dp.domain;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
@DiscriminatorValue("P")
@NoArgsConstructor @AllArgsConstructor @ToString 
@Table(name="Patient")
public class Patient extends User implements Serializable {
		/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
		public Patient(Object object, int i) {
		// TODO Auto-generated constructor stub
	}
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private Long id;
		@Column(name="num_patient")
		@JsonProperty("numPatient")
		private String numPatient;
		public String getNumPatient() {
			return numPatient;
		}
		public void setNumPatient(String numPatient) {
			this.numPatient = numPatient;
		}
		
		

}
