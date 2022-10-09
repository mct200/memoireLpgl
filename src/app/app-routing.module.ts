import { ListConsulComponent } from './list-consul/list-consul.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { RegisterComponent } from './register/register.component';
import { RdvComponent } from './rdv/rdv.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { EditPrescripteurComponent } from './edit-prescripteur/edit-prescripteur.component';
import { PrescripteurListComponent } from './prescripteur-list/prescripteur-list.component';
import { HomeComponent } from './home/home.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PrescripteurComponent } from './prescripteur/prescripteur.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';

const routes: Routes = [
 {
  path:"Patient-list",
  component:PatientListComponent
 },
 {
  path:'register-patient',
  component:RegisterPatientComponent
 },
 {
  path:'edit-patient/:id',
  component:EditPatientComponent

 },

 {
  path:'admin',
  component:AdminComponent
 },
 {
  path:'user',
  component:UserComponent
 },
 { path:'', redirectTo:'/login', pathMatch:"full"},
 {
  path:'login',
  component:LoginComponent
 },
 {
  path:'forbidden',
  component:ForbiddenComponent
 },
 {
  path:'home',
  component:HomeComponent
 },
 {
  path:'prescripteur',
  component:PrescripteurComponent
 },
 {
  path:'dossier',
  component:DossiermedicalComponent
 },
 {
  path:'rdv',
  component:RdvComponent
 },
 {
  path:'consultation',
  component:ConsultationComponent
 },
 {
  path:'edit-prescripteur:/id',
  component:EditPrescripteurComponent
 },
 {
  path:'inscription',
  component:RegisterComponent
 },
 {
  path:'list-rdv',
  component:ListRdvComponent
 },
 {
  path:'list-consul',
  component:ListConsulComponent
 },
 {
  path:'prescripteur-list',
  component:PrescripteurListComponent
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
