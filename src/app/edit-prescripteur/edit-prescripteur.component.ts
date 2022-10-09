import { Prescripteur } from './../prescripteur';
import { Component, OnInit } from '@angular/core';
import { PrescripteurService } from '../prescripteur.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-prescripteur',
  templateUrl: './edit-prescripteur.component.html',
  styleUrls: ['./edit-prescripteur.component.scss']
})
export class EditPrescripteurComponent implements OnInit {

  showAlert= false ;
  activeModal: any;
  prescripteur : any;
  id:any;

  constructor(private route:ActivatedRoute,private prescripteurService: PrescripteurService) {

  }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id =Number(routeParams.get('id'));
    console.log(this.id);
   this.prescripteurService.find(this.id).subscribe((data:any)=>{

     this.prescripteur= data;
     console.log(this.prescripteur);
   });

  }
  updatePrescripteur(){
    this.prescripteurService.addPrescripteur(this.prescripteur).subscribe((response)=>{
      console.log(response);
      this.prescripteur = {};
      this.showAlert=true;
    })
   }
  closeAlert(){
    this.showAlert=false;
 }
  cancel(): void {
    this.prescripteur = {};
    window.history.back();

  }

}
