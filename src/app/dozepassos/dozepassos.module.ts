import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';

import { PassosRoutingModule } from './passos-routing.modules';
import { PassosComponent } from './passos/passos.component';
import { SharedRodapeModule } from './../shared-rodape/shared-rodape.module';


@NgModule({
  declarations: [ PassosComponent ],
  imports: [
    CommonModule,
    SharedRodapeModule,
    AccordionModule,

    PassosRoutingModule
  ]
})
export class DozepassosModule { }
