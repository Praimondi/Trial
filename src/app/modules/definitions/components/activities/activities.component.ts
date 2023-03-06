import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';
import { Attivita } from 'src/app/shared/interfaces/attivita';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  listaAttivitaTipo: Attivita[]=[]

  constructor(private pazienteService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.listaAttivitaTipo = this.pazienteService.getActivities()
  }

  go2definitions(){
    this.router.navigate(['definitions']);
  }
}
