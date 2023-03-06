import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';
import { Paziente } from 'src/app/shared/interfaces/paziente';

@Component({
  selector: 'app-paziente',
  templateUrl: './paziente.component.html',
  styleUrls: ['./paziente.component.scss']
})
export class PazienteComponent implements OnInit {
  paziente_id: string="";
  listaPazienti: Paziente[]=[];
  pazienteSelezionato : Paziente = { id: 0, name : '', gender: '', birthDate: '', heightCm: 0, weightKg: 0, bmi: 0 , summary: []};

  constructor(private patientService:  PatientService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paziente_id = params['paziente'];
    })

    this.listaPazienti = this.patientService.getListaPazienti();
    this.listaPazienti.forEach(paziente => {
      if(paziente.id.toString() == this.paziente_id){
        this.pazienteSelezionato = paziente;
      }
    });

  }

  go2ListaPazienti(){
    this.router.navigate(['listaPazienti']);
  }
}
