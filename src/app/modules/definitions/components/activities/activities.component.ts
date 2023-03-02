import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { Attivita } from 'src/app/shared/interfaces/attivita';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  listaAttivita: Attivita[]=[]

  constructor(private pazienteService: PatientService) {}

  ngOnInit(): void {
    this.pazienteService.getActivities().subscribe(
      (attivita: Attivita[]) => {
        this.listaAttivita = attivita
      }
    )
  }
}
