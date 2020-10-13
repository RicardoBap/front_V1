import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalvavidasComponent } from './salvavidas/salvavidas.component';

const routes: Routes = [
  { path: '', component: SalvavidasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrupoRoutingModule { }
