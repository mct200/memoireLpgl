import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  public patients:Patient[] | undefined;
  constructor(private patientService: PatientService){
  }

  ngOnInit(): void {
      this.getPatient();
  }
  public getPatient():void{
    this.patientService.getPatients().subscribe(data =>{
      this.patients = data;
      console.log(this.patients);
    });
    }
    deletePatient(id:any){
      //console.log(id);
      this.patientService.deletePatient(id).subscribe(res=>{
            console.log(res);
      })
    }

}
