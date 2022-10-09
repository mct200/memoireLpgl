import { Login } from './login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl=environment.apiBaseUrl;
  //authenticated = false;
  constructor(private http:HttpClient) { }
  public login(login:any,): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    console.log("contenu de login:",login);
   return this.http.post<any> (`${this.apiServerUrl}/login/`, login,{headers});
 }
  public getUsers(){
    let email="coumbissthiam96@gmail.com";
    let password="passer";
    const headers=new HttpHeaders({Authorization:'Basic'+btoa(email+":"+password)})
   return this.http.get("http://localhost:8080/getUsers",{headers});
  }
}
