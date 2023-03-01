import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { Paziente } from 'src/app/Shared/interfaces/paziente';

@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent implements OnInit{

  listaPazienti: Paziente[]=[]

  constructor(private patService: PatientService) {

  }

  ngOnInit(): void {

  }
}
