import { Prescripteur } from './../prescripteur';
import { Component, OnInit } from '@angular/core';
import { PrescripteurService } from '../prescripteur.service';

@Component({
  selector: 'app-prescripteur-list',
  templateUrl: './prescripteur-list.component.html',
  styleUrls: ['./prescripteur-list.component.scss']
})
export class PrescripteurListComponent implements OnInit {
  public prescripteurs:Prescripteur[] | undefined;
  constructor(private prescripteurService: PrescripteurService){
  }

  ngOnInit(): void {
      this.getPrescripteur();
  }
  public getPrescripteur():void{
    this.prescripteurService.getPrescripteurs().subscribe(data =>{
      this.prescripteurs = data;
      console.log(this.prescripteurs);
    });
    }

}
