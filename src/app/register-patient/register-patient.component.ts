import { Patient } from '../patient';
import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.scss']
})
export class RegisterPatientComponent implements OnInit {

patients:any;
showAlert=false;
  activeModal: any;
id:any;
  constructor(private patientService: PatientService ) {
    this.patients = {};
  }

  ngOnInit(): void {


  }

 savePatient(){
  this.patientService.addPatient(this.patients).subscribe((response)=>{
    console.log(response);
    this.patients = {};
    this.showAlert=true;
  })
 }
 closeAlert(){
    this.showAlert=false;
 }

 cancel(): void {
  this.patients = {};
  window.history.back();
}


}
