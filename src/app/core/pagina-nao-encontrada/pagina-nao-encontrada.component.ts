import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  template: `
    <div class="container">
      <div class="ui-g">
        <h1 class="text-center">Página não encontrada</h1>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
