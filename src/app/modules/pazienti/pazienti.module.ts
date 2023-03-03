import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PazientiRoutingModule } from './pazienti-routing.module';
import { PazientiComponent } from './pages/pazienti/pazienti.component';
import { ListaPazientiComponent } from './components/lista-pazienti/lista-pazienti.component';
import { PazienteComponent } from './components/paziente/paziente.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PazientiComponent,
    ListaPazientiComponent,
    PazienteComponent,

  ],
  imports: [
    CommonModule,
    PazientiRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class PazientiModule { }
