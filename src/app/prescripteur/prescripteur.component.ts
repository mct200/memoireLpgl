import { Component, OnInit } from '@angular/core';
import { PrescripteurService } from '../prescripteur.service';

@Component({
  selector: 'app-prescripteur',
  templateUrl: './prescripteur.component.html',
  styleUrls: ['./prescripteur.component.scss']
})
export class PrescripteurComponent implements OnInit {

  prescripteurs:any;
  showAlert=false;
    activeModal: any;

    constructor(private prescripteurService: PrescripteurService ) {
      this.prescripteurs = {};
    }

    ngOnInit(): void {

    }



   savePrescripteur(){
    this.prescripteurService.addPrescripteur(this.prescripteurs).subscribe((response)=>{
      console.log(response);
      this.prescripteurs = {};
      this.showAlert=true;
    })
   }
   closeAlert(){
      this.showAlert=false;
   }

   cancel(): void {
    this.prescripteurs = {};
    window.history.back();
  }


}
