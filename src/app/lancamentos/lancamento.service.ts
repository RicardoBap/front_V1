import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Lancamento } from './../core/model';

import * as moment from 'moment'
import { MoneyHttp } from '../seguranca/money-http';

import { environment } from 'src/environments/environment.prod';

export class LancamentoFiltro {
  descricao: string
  dataVencimentoInicio: Date
  dataVencimentoFim: Date
  pagina = 0
  itensPorPagina = 5
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl: string /* 'http://localhost:8080/lancamentos' */

  constructor(private http: MoneyHttp) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`
   }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),        //params = params.set('page', filtro.pagina.toString())
        size: filtro.itensPorPagina.toString() //params = params.set('size', filtro.itensPorPagina.toString())
      }
    })

    if(filtro.descricao) {
      params = params.append('descricao', filtro.descricao)
    }
    if(filtro.dataVencimentoInicio) {
      params = params.append('dataVencimentoDe',
        moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'))
    }
    if(filtro.dataVencimentoFim) {
      params = params.append('dataVencimentoAte',
        moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'))
    }

    return this.http.get<any>(`${this.lancamentosUrl}?resumo`, { params })
    .toPromise()
    .then(response => {
      const lancamentos = response.content

      const resultado = {
        lancamentos: lancamentos,
        total: response.totalElements
      }
      return resultado
    })
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<any>(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(() => null)
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.post<Lancamento>(`${this.lancamentosUrl}`, lancamento )
      .toPromise()
  }

  buscarPeloCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get<Lancamento>(`${this.lancamentosUrl}/${codigo}` )
      .toPromise()
      .then( response => {
        const lancamento = response
        return lancamento
      })
  }

  atualizar(lancamento: Lancamento, codigo: number): Promise<Lancamento> {
    return this.http.put<Lancamento>(`${this.lancamentosUrl}/${codigo}`, lancamento)
      .toPromise()
      .then(response => response)
  }

  private converterStringParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

    if (lancamento.dataPagamento) {
      lancamento.dataPagamento = moment(lancamento.dataPagamento,
        'YYYY-MM-DD').toDate();
    }
    }
  }

}
