import { Patient } from '../patient';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  showAlert= false ;
  activeModal: any;
  patient : any;
  id:any;

  constructor(private route:ActivatedRoute,private patientService: PatientService) {

  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id =Number(routeParams.get('id'));
    console.log(this.id);
   this.patientService.find(this.id).subscribe((data:any)=>{

     this.patient= data;
     console.log(this.patient);
   });

  }
  updatePatient(){
    this.patientService.addPatient(this.patient).subscribe((response)=>{
      console.log(response);
      this.patient = {};
      this.showAlert=true;

    })
    window.history.back();
   }
  closeAlert(){
    this.showAlert=false;
 }
  cancel(): void {
    this.patient = {};
    window.history.back();
  }
}

