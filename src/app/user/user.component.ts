import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
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
