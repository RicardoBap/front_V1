import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { SharedRodapeModule } from './../shared-rodape/shared-rodape.module';
import { LocalRoutingModule } from './local-routing.modules';


@NgModule({
  declarations: [LocalizacaoComponent],
  imports: [
    CommonModule,

    LocalRoutingModule,
    SharedRodapeModule
  ]
})
export class LocalModule { }
