import { Component} from '@angular/core';
import { PatientService } from 'src/app/core/services/patient.service';
import { Attivita } from 'src/app/shared/interfaces/attivita';
import { AttivitaSvolta } from 'src/app/shared/interfaces/attivita-svolta';
import { Paziente } from 'src/app/shared/interfaces/paziente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-pazienti',
  templateUrl: './lista-pazienti.component.html',
  styleUrls: ['./lista-pazienti.component.scss']
})
export class ListaPazientiComponent{
  listaPazienti: Paziente[]=[];
  allActivities: any;

  selectedFilter: string = "";

  constructor(private patientService:  PatientService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // importa il parametro dall'url, si aggiorna ad ogni cambiamento del parametro
    this.activatedRoute.params.subscribe(params => {
      this.selectedFilter = params['selectedValue'];
    })
    console.log('sono in lista filetr: '+this.selectedFilter);

    // importa li array dal service
    this.allActivities = this.patientService.getActivities();
    this.listaPazienti = this.patientService.getListaPazienti();
  }

  // restituisce il tipo di intensità di attività passata come parametro
  getTypeOfActivities(activityFromSummary: string): string {
    let type: string="s";
    this.allActivities.forEach((indexedActivity: Attivita) => {
      if (indexedActivity.activity === activityFromSummary) {
        type = indexedActivity.intensity;
      }else{
      }
    })
    // console.log("returning"+type);
    return type;
  }

  // restituisce il colore della riga in base al filtro selezionato
  // valutando se il totale delle attività supera la soglia stabilita
  moderate150Filter(summary: AttivitaSvolta[]): string {
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

  // restituisce il colore della riga in base al filtro selezionato
  // valutando se il totale delle attività supera la soglia stabilita
  vigorous70Filter(summary: AttivitaSvolta[]): string {
    let vigorousMinutes=0;
    let intensita: string;

    summary.forEach(attivita => {
      intensita=this.getTypeOfActivities(attivita.activity);
      if (intensita === "vigorous") {
        vigorousMinutes += attivita.minutes;
      }
    })

    if (vigorousMinutes >= 70) {
      return 'rgb(189, 239, 189)'
    } else {
      return 'rgb(245, 191, 178)'
    }
  }

  mixedFilter(summary: AttivitaSvolta[]): string {
    let vigorousMinutes=0;
    let moderateMinutes=0;
    let intensita: string;

    summary.forEach(attivita => {
      intensita=this.getTypeOfActivities(attivita.activity);
      if (intensita === "vigorous") {
        vigorousMinutes += attivita.minutes;
      }
      if (intensita === "moderate") {
        moderateMinutes += attivita.minutes;
      }
    })

    // if (vigorousMinutes/moderateMinutes === 0.25) {
/*     if (vigorousMinutes+moderateMinutes >= 125) {
      return 'rgb(189, 239, 189)'
    } else {
      return 'rgb(245, 191, 178)'
    } */

    if (vigorousMinutes/moderateMinutes>=0.25) {
      return 'rgb(189, 239, 189)'
    } else {
      return 'rgb(245, 191, 178)'
    }
  }

  go2patient(paziente_id: number){
    this.router.navigate(['paziente/'+paziente_id.toString()]);
  }

}


