import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';
import { Paziente } from 'src/app/shared/interfaces/paziente';

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styleUrls: ['./pazienti.component.scss']
})
export class PazientiComponent implements OnInit {

  selectedValue: string="";

  constructor(private router: Router, private patientService: PatientService) {
  }
  ngOnInit(): void {
    console.log('sono in pazienti costruttore: '+this.selectedValue);
    this.patientService.setListaPazienti();
    this.patientService.setActivities();
  }

  go2patients(){
    this.router.navigate(['listaPazienti/'+this.selectedValue]);
  }

}
