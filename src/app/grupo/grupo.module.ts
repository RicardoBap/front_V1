import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRodapeModule } from './../shared-rodape/shared-rodape.module';
import { SalvavidasComponent } from './salvavidas/salvavidas.component';
import { GrupoRoutingModule } from './grupo-routing.modules';


@NgModule({
  declarations: [ SalvavidasComponent ],
  imports: [
    CommonModule,

    SharedRodapeModule,
    GrupoRoutingModule
  ]
})
export class GrupoModule { }
