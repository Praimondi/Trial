import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPazientiComponent } from './components/lista-pazienti/lista-pazienti.component';
import { PazientiComponent } from './pages/pazienti/pazienti.component';


const routes: Routes = [
  {
    path: '',
    component: PazientiComponent,
    children:[
      {path:'listaPazienti', component: ListaPazientiComponent},
      // {path:'carPreview', component: CarPreviewComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PazientiRoutingModule { }
