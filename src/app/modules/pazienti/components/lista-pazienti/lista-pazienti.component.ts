import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { Paziente } from 'src/app/shared/interfaces/paziente';
import { PazienteComponent } from '../paziente/paziente.component';


@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent{
  listaPazienti: Paziente[]=[];

  constructor(private patientService:  PatientService) { }
  ngOnInit(): void {
    this.patientService.getListaPazienti().subscribe(
      (data) => {
        this.listaPazienti = data;
      })

    this.listaPazienti.forEach(paziente => {
      this.patientService.getSpecificSummary(paziente.id.toString()).subscribe(
        (data) => {
        paziente.summary = data;
      })
    });

    this.patientService.pushPazientiIntoService(this.listaPazienti);
    
    //this.listaPazienti = this.patientService.getListaPazienti();
  }

}


