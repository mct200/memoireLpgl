import { LoginService } from './../login.service';
import { UserService } from './../_service/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:any;
  password:any;
  model: any = {};
  constructor(  private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login() {
    let url = 'http://localhost:8080/login';
    let result = this.http.post(url, {
        email: this.model.email,
        password: this.model.password
    }).subscribe((isValid: any) => {
        if (isValid) {
            sessionStorage.setItem(
              'token',
              btoa(this.model.email + ':' + this.model.password)
            );
            this.router.navigate(['/home']);
        } else {
            alert("Authentication failed.");
        }
    });
}
}
