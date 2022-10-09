import { LoginService } from './login.service';
import { Login } from './login';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Patient } from './patient';
import { PatientService } from './patient.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private Login: LoginService, private http: HttpClient, private router: Router) {
    //this.Login.authenticate;
  }

  ngOnInit(): void {
  }


}
