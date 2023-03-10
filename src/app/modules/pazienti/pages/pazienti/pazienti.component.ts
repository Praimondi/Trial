import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styleUrls: ['./pazienti.component.scss']
})
export class PazientiComponent implements OnInit {

  selectedValue: string="nessuno";

  constructor(private router: Router, private patientService: PatientService) {
  }
  ngOnInit(): void {
    this.patientService.setListaPazienti();
    this.patientService.setActivities();
  }

  go2patients(){
    this.router.navigate(['listaPazienti/'+this.selectedValue]);
  }
}
