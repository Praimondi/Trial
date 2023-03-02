import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paziente } from 'src/app/shared/interfaces/paziente';
import { Attivita } from 'src/app/shared/interfaces/attivita';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  constructor(private http: HttpClient) {
  }

  getListaPazienti(){
    return this.http.get<Paziente[]>('../../../assets/json/patients.json');
  }

  getActivities(){
    return this.http.get<Attivita[]>('../../../assets/json/definitions/activities.json');
  }


}
