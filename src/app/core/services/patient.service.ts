import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paziente } from 'src/app/shared/interfaces/paziente';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  listaPersone: Paziente[] = [];

  constructor(private http: HttpClient) { }

  getListaPazienti(){
    return this.http.get<Paziente[]>('../../../assets/json/patients.json');
  }
}
