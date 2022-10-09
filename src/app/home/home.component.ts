import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
