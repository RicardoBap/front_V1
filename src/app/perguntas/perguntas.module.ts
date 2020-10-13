import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

import { PerguntasComponent } from './perguntas.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressoComponent } from './progresso/progresso.component';

import { SharedRodapeModule } from './../shared-rodape/shared-rodape.module';
import { PerguntasRoutingModule } from './perguntas-routing.modules';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    PerguntasComponent,
    PainelComponent,
    ProgressoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ProgressBarModule,
    RadioButtonModule,

    PerguntasRoutingModule,
    SharedRodapeModule
  ],
  exports: [
    PerguntasComponent
  ]
})
export class PerguntasModule { }
