import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { DashboardService } from './../dashboard.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any
  lineChartData: any

  constructor(
    private dashboardService: DashboardService,
    private decimalPipe: DecimalPipe,
    private title: Title
  ) {
    this.title.setTitle('Dashboard')
  }

  ngOnInit(): void {
    this.configurarGraficoPizza()
    this.configuarGraficoLinha()
  }

  configurarGraficoPizza() {
    this.dashboardService.lancamentosPorCategoria()
      .then(dados => {
        this.pieChartData = {
          labels: dados.map(dado => dado.categoria.nome),
          datasets: [
            {
              data: dados.map(dado => dado.total),
              backgroundColor: [
                '#72D3F7', '#bc8f8f', '#808000', '#808080',
                '#ffb6c1', '#483d8b', '#8fbc8f', '#cd853f',
                '#4682b4', '#4b0082', '#ffff00', '#eee8aa'
              ]
            }
          ]
        }
      })
  }

  configuarGraficoLinha() {
    this.dashboardService.lancamentosPorDia()
      .then(dados => {
        const diasDoMes = this.configurarDiasMes()

        const totaisReceitas = this.totaisPorCadaDiaMes(dados.filter(
          dado => dado.tipo === 'RECEITA' ), diasDoMes)

        const totaisDespesas = this.totaisPorCadaDiaMes(dados.filter(
          dado => dado.tipo === 'DESPESA' ), diasDoMes)

        this.lineChartData = {
          labels: diasDoMes,
          datasets: [
            {
              label: 'Receitas',
              data: totaisReceitas,
              borderColor: '#3366CC'
            },
            {
              label: 'Despesas',
              data: totaisDespesas,
              borderColor: '#D62B00'
            }
          ]
        }
      })
  }


  private configurarDiasMes() {
    const mesReferencia = new Date()
    mesReferencia.setMonth(mesReferencia.getMonth() + 1)
    mesReferencia.setDate(0)

    const quantidade = mesReferencia.getDate()

    const dias: number[] = []

    for (let i = 1; i <= quantidade; i++) {
      dias.push(i)
    }
    return dias
  }


  private totaisPorCadaDiaMes(dados, diasDoMes) {

    const totais: number[] = []

    for ( const dia of diasDoMes ) {
      let total = 0

      for (const dado of dados) {
        if ( dado.dia.getDate() === dia ) {
          total = dado.total

          break
        }
      }

      totais.push(total)
    }
    return totais
  }

}

/*
pieChartData = {
    labels: [ 'Mensal', 'Educação', 'Lazer', 'Imprevistos' ],
    datasets: [
      {
        data: [ 2500, 2700, 550, 235 ],
        backgroundColor: [ '#FF9900', '#109618', '#990099', '#3B3EAC' ]
      }
    ]
  }



lineChartData = {
    labels: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado' ],
    datasets: [
      {
        label: 'Receitas',
        data: [ 4, 10, 18, 5, 1, 20, 3 ],
        borderColor: '#3366CC'
      },
      {
        label: 'Despesas',
        data: [ 10, 15, 8, 5, 1, 7, 9 ],
        borderColor: '#D62B00'
      }
    ]
  }
  */
