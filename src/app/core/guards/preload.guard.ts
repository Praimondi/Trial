import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientService } from '../services/patient.service';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<Observable<any>> {
  constructor(private patientService: PatientService) {}
  resolve() {
    return this.patientService.preload();
  }
}
