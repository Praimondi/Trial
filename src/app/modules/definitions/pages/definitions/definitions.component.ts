import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/core/services/patient.service';

@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss']
})
export class DefinitionsComponent implements OnInit {
  constructor(private router: Router, private patientService: PatientService) { }
  ngOnInit(): void {
    this.patientService.setActivities();
  }

  go2home(){
    this.router.navigate(['']);
  }

  go2Activities(){
    this.router.navigate(['definitions/activities']);
  }

}
