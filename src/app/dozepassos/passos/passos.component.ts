import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passos',
  templateUrl: './passos.component.html',
  styleUrls: ['./passos.component.css']
})
export class PassosComponent implements OnInit {

  titulo: string = 'Os 12 Passos de A.A.';

  constructor() {
   }

  ngOnInit(): void {}


}
