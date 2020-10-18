import { Injectable } from '@angular/core';

import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Pessoa } from './../core/model';
import { MoneyHttp } from '../seguranca/money-http';

import { environment } from 'src/environments/environment.prod';

export class PessoasFiltro {
  nome: string
  pagina = 0
  itensPorPagina = 5
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl: string;

  constructor(private http: MoneyHttp) {
    this.pessoasUrl = `${environment.apiUrl}/pessoas`
   }

  pesquisar( filtro: PessoasFiltro ): Promise<any> {

      let params = new HttpParams({
        fromObject: {
          page: filtro.pagina.toString(),
          size: filtro.itensPorPagina.toString()
        }
      })

      if(filtro.nome) {
        params = params.append('nome', filtro.nome)
      }

    return this.http.get<any>(`${this.pessoasUrl}`, { params } )
      .toPromise()
      .then( response => {
        const pessoas = response.content

        const resultado = {
          pessoas: pessoas,
          total: response.totalElements
        }
        return resultado
       })
    }

  excluir(codigo: number): Promise<void> {
      return this.http.delete<any>(`${this.pessoasUrl}/${codigo}` )
        .toPromise()
        .then(() => null)
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')

      return this.http.put<any>(`${this.pessoasUrl}/${codigo}/ativo`, `${ativo}`, { headers })
      .toPromise()
      .then(() => null)
  }

  listarTodas() {
      return this.http.get<any>(this.pessoasUrl)
      .toPromise()
      .then( response =>  response.content )
    }

  adicionar(pessoa: Pessoa): Promise<Pessoa> {
    return this.http.post<Pessoa>(`${this.pessoasUrl}`, pessoa )
      .toPromise()
  }

  buscarPeloCodigo(codigo: number): Promise<Pessoa> {
      return this.http.get<Pessoa>(`${this.pessoasUrl}/${codigo}`)
        .toPromise()
  }

  atualizar(pessoa: Pessoa, codigo: number): Promise<Pessoa> {
    return this.http.put<Pessoa>(`${this.pessoasUrl}/${codigo}`, pessoa )
      .toPromise()
  }

}
