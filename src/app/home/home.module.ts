import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.modules';
import { SharedRodapeModule } from './../shared-rodape/shared-rodape.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRodapeModule,

    HomeRoutingModule
  ]
})
export class HomeModule { }
