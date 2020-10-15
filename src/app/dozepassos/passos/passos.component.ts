import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passos',
  templateUrl: './passos.component.html',
  styleUrls: ['./passos.component.css']
})
export class PassosComponent implements OnInit {

  titulo: string = 'Os 12 Passos de A.A.';

  constructor(private title: Title) {
   }

  ngOnInit(): void {
    this.title.setTitle('12 passos de A.A.')
  }


}
