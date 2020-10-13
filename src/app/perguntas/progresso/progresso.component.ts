import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  template: `
  <div class="p-col-12">
    <p-progressBar [value]="progresso" ></p-progressBar>
  </div>
  `,
  styles: []
})
export class ProgressoComponent  {

  @Input()
  public progresso = 0;

}
