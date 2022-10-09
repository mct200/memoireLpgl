import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prescripteur } from './prescripteur';

@Injectable({
  providedIn: 'root'
})
export class PrescripteurService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPrescripteurs(): Observable<any>{
    console.log('apiServeurUrl=',this.apiServerUrl);
     return this.http.get<any> (`${this.apiServerUrl}/prescripteur/list`);
  }
  public addPrescripteur(prescripteur:any): Observable<Prescripteur>{
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    console.log("contenu de Prescripteur:",prescripteur);
   return this.http.post<any> (`${this.apiServerUrl}/prescripteur/add`, prescripteur,{headers});
 }
  public updatePrescripteur(prescripteur:any): Observable<Prescripteur>{
     return this.http.put<Prescripteur> (`${this.apiServerUrl}/prescripteur/update`, prescripteur);
  }
  public deletePrescripteur(): Observable<void>{
    return this.http.delete<void> (`${this.apiServerUrl}/prescripteur/delete/${Prescripteur}`);
 }
 find(id: number): Observable<any> {
  return this.http.get<Prescripteur>(`${this.apiServerUrl}/prescripteur/find/${id}`);
}
}
