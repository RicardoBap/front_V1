import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-salvavidas',
  templateUrl: './salvavidas.component.html',
  styleUrls: ['./salvavidas.component.css']
})
export class SalvavidasComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Salva vidas')
  }

}
