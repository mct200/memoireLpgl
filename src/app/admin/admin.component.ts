import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  showAlert=false;
  constructor(private patientService: PatientService) {
    this.showAlert=true;
  }

  ngOnInit(): void {
  }


  closeAlert(){
    this.showAlert=false;
 }

}
