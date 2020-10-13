import { Component } from '@angular/core';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent {

  constructor() {}

  public emAndamento = true;
  public tipoEncerramento;

  public encerrar(tipo: number): void {
    //console.log('Tipo' + tipo);
    this.emAndamento = false;
    this.tipoEncerramento = tipo;
  }

  public reIniciar(): void {
    this.emAndamento = true;
    this.tipoEncerramento = 0;
  }

}
