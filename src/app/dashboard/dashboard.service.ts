import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';

import { MoneyHttp } from './../seguranca/money-http';

import * as moment from 'moment';

//import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  lancamentosUrl: string

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`
   }


  lancamentosPorCategoria(): Promise<Array<any>> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')

    return this.http.get<any>(`${this.lancamentosUrl}/estatisticas/por-categoria`)
      .toPromise()
      .then(response => response)
  }


  lancamentosPorDia(): Promise<Array<any>> {
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==')


    return this.http.get<any>(`${this.lancamentosUrl}/estatisticas/por-dia`)
      .toPromise()
      .then(response => {
        const dados = response
        this.converterStringsParaDatas(dados)

        return dados
      })
  }


  private converterStringsParaDatas(dados: Array<any>) {
    for(const dado of dados) {
      dado.dia = moment(dado.dia, 'YYYY-MM-DD').toDate()
    }
  }


 }
