import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NgxPrintModule } from "ngx-print";
import {ReactiveFormsModule  } from "@angular/forms";
import { PrescripteurComponent } from './prescripteur/prescripteur.component';
import { EditPrescripteurComponent } from './edit-prescripteur/edit-prescripteur.component';
import { PrescripteurListComponent } from './prescripteur-list/prescripteur-list.component';
import { SecretaireComponent } from './secretaire/secretaire.component';
import { SecretaireListComponent } from './secretaire-list/secretaire-list.component';
import { TraitantComponent } from './traitant/traitant.component';
import { TraitantListComponent } from './traitant-list/traitant-list.component';
import { TraitantEditComponent } from './traitant-edit/traitant-edit.component';
import { SecretaireEditComponent } from './secretaire-edit/secretaire-edit.component';
import { DossiermedicalComponent } from './dossiermedical/dossiermedical.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { RdvComponent } from './rdv/rdv.component';
import { RegisterComponent } from './register/register.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';
import { ListConsulComponent } from './list-consul/list-consul.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    RegisterPatientComponent,
    EditPatientComponent,
    AdminComponent,
    HomeComponent,
    UserComponent,
    LoginComponent,
    ForbiddenComponent,
    PrescripteurComponent,
    EditPrescripteurComponent,
    PrescripteurListComponent,
    SecretaireComponent,
    SecretaireListComponent,
    TraitantComponent,
    TraitantListComponent,
    TraitantEditComponent,
    SecretaireEditComponent,
    DossiermedicalComponent,
    ConsultationComponent,
    RdvComponent,
    RegisterComponent,
    ListRdvComponent,
    ListConsulComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
