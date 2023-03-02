import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paziente } from 'src/app/shared/interfaces/paziente';

@Injectable({
  providedIn: 'root'
})
export class PatientService{

  listaPazienti: Paziente[] = [];

  constructor(private http: HttpClient) {
  }

  getListaPazienti(){
    return this.http.get<Paziente[]>('../../../assets/json/patients.json');
/*     this.http.get('../../../assets/json/patients.json').subscribe((data) => {
      console.log(data);
    }); */

  }
}
