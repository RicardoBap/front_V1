import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassosComponent } from './passos/passos.component';

const routes: Routes = [
  { path: '', component: PassosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassosRoutingModule { }
