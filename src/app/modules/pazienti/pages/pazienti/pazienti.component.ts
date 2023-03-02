import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';
import { Paziente } from 'src/app/shared/interfaces/paziente';

@Component({
  selector: 'app-pazienti',
  templateUrl: './pazienti.component.html',
  styleUrls: ['./pazienti.component.scss']
})
export class PazientiComponent implements OnInit {


  constructor(private router: Router) {}

  ngOnInit(): void {}

  go2Preview(){
    this.router.navigate(['listaPazienti']);
  }
}
