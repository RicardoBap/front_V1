import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntasComponent } from './perguntas.component';

const routes: Routes = [
  { path: '', component: PerguntasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerguntasRoutingModule { }
