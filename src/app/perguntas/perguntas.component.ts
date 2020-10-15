import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {

  ngOnInit() {
    this.title.setTitle('Você deve procurar o A.A.?')
  }

  constructor(private title: Title) {}

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
