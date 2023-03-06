import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paziente } from 'src/app/shared/interfaces/paziente';
import { Attivita } from 'src/app/shared/interfaces/attivita';
import { AttivitaSvolta } from 'src/app/shared/interfaces/attivita-svolta';

@Injectable({
  providedIn: 'root'
})
export class PatientService{
  listaPazienti: Paziente[]=[];
  activities: Attivita[]=[];


  constructor(private http: HttpClient) {
  }

  setListaPazienti(){
    this.http.get<Paziente[]>('../../../assets/json/patients.json').subscribe(
      (data) => {
        this.listaPazienti = data;
        this.listaPazienti.forEach(paziente => {
          this.http.get<AttivitaSvolta[]>('../../../assets/json/patients/'+paziente.id.toString()+'/summary.json').subscribe(data=>{
            paziente.summary = data;
          })
        })
      })
  }

  setActivities(){
    this.http.get<Attivita[]>('../../../assets/json/definitions/activities.json').subscribe(
      (data) => {
        this.activities = data;
      }
    )
  }

  getActivities(){
    return this.activities;
  }

  getListaPazienti(){
    return this.listaPazienti;
  }

}
