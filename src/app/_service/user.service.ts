import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API ="http://localhost:8080";
  requestHeader = new HttpHeaders(
    {
      "No-Auth": "True"
    }
  );
  constructor(private http:HttpClient) { }
  public login(loginData: any){
    return this.http.post(this.PATH_OF_API + "/authentificate", loginData ,{headers:this.requestHeader})
  }
}
