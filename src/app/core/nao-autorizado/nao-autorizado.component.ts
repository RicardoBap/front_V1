import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nao-autorizado',
  template: `
  <div class="container">
    <div class="ui-g">
      <h1 class="text-center">Acesso negado!</h1>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class NaoAutorizadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
