import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { ActivitiesComponent } from 'src/app/modules/definitions/components/activities/activities.component';
import { Attivita } from 'src/app/shared/interfaces/attivita';
import { AttivitaSvolta } from 'src/app/shared/interfaces/attivita-svolta';
import { Paziente } from 'src/app/shared/interfaces/paziente';
import { PazienteComponent } from '../paziente/paziente.component';


@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent{
  listaPazienti: Paziente[]=[];
  allActivities: any;

  constructor(private patientService:  PatientService) { }

  ngOnInit(): void {
    this.allActivities = this.patientService.getActivities();
    this.listaPazienti=this.patientService.getListaPazienti();
  }

  getTypeOfActivities(activityFromSummary: string): string {
    let type: string="s";
    this.allActivities.forEach((indexedActivity: Attivita) => {
      if (indexedActivity.activity === activityFromSummary) {
        type = indexedActivity.intensity;
        console.log("true");
      }else{
        console.log("false");
      }
    })
    console.log("returning"+type);
    return type;
  }

  Moderate150Filter(summary: AttivitaSvolta[]): string {
      let moderateMinutes=0;
      let intensita: string;

      summary.forEach(attivita => {
        intensita=this.getTypeOfActivities(attivita.activity);
        if (intensita === "moderate") {
          moderateMinutes += attivita.minutes;
        }
      })

      if (moderateMinutes >= 150) {
        return 'rgb(189, 239, 189)'
      } else {
        return 'rgb(245, 191, 178)'
      }
  }
}


