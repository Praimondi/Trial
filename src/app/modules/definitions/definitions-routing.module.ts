import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './components/activities/activities.component';
import { DefinitionsComponent } from './pages/definitions/definitions.component';

const routes: Routes = [
    {
      path: '',
      component: DefinitionsComponent,
      children:[
        {path:'activities', component: ActivitiesComponent},

      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefinitionsRoutingModule { }
