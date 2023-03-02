import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { Paziente } from 'src/app/shared/interfaces/paziente';

@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent{

/*   listaPazienti: Paziente[]=[]

  constructor(private pazienteService: PatientService) {

  }

  ngOnInit(): void {
    this.pazienteService.getListaPazienti().subscribe(
      (pazienti: Paziente[]) => {
        this.listaPazienti = pazienti
      }
    )
  }

  getPazienti(){
    /*     this.http.get<Paziente[]>('assets/patients.json').subscribe(data => {
      console.log(data);

    this.pazienteService.getListaPazienti().subscribe(
      (data: Paziente[]) => {
        this.listaPazienti = data;
      }
    )
  } */
  listaPazienti: Paziente[]=[]

  constructor(private pazienteService: PatientService) {

  }

  ngOnInit(): void {
    this.pazienteService.getListaPazienti().subscribe(
      (pazienti: Paziente[]) => {
        this.listaPazienti = pazienti
      }
    )
  }

/*   getPazienti(){
    this.pazienteService.getListaPazienti().subscribe(
      (data: Paziente[]) => {
        this.listaPazienti = data;
      }
    )
  } */
}
