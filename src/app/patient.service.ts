import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { Observable } from "rxjs";
import { Patient } from "./patient";
import { environment } from 'src/environments/environment';
export type EntityResponseType = HttpResponse<Patient>;
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPatients(): Observable<any>{
    console.log('apiServeurUrl=',this.apiServerUrl);
     return this.http.get<any> (`${this.apiServerUrl}/patient/list`);
  }
  public addPatient(patient:any): Observable<Patient>{
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    console.log("contenu de patient:",patient);
   return this.http.post<any> (`${this.apiServerUrl}/patient/add`, patient,{headers});
 }
  public updatePatient(patient:any): Observable<Patient>{
     return this.http.put<Patient> (`${this.apiServerUrl}/patient/update`, patient);
  }
  public deletePatient(id:any): Observable<void>{
    return this.http.delete<void> (`${this.apiServerUrl}/patient/delete/${patient}`);
 }
 find(id: number): Observable<any> {
  return this.http.get<Patient>(`${this.apiServerUrl}/patient/find/${id}`);
}

}
function patient<T>(arg0: string, patient: any): Observable<Patient> {
  throw new Error('Function not implemented.');
}
export function getPatientIdentifier(patient: Patient): number | undefined {
  return patient.id;
}

