import { AuthService } from 'src/app/seguranca/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { MessageService, ConfirmationService } from 'primeng/api';

import { Categoria } from './../../core/model';
import { CategoriaService } from './../categorias.service';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

  categorias = [];
  categoria = new Categoria() //<-----

  constructor(
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    public auth: AuthService,
    private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Categorias')
    this.pesquisar()
  }

  get editando() {
    return Boolean(this.categoria.codigo)
  }

  pesquisar() {
    this.categoriaService.consultar()
      .then(dados => {
        this.categorias = dados
      })
  }

  salvar(categoriaForm: NgForm) {
    if (this.editando) {
      this.atualizarCategoria(this.categoria.codigo)
    } else {
      this.adicionarCategoria(categoriaForm)
    }
  }

  adicionarCategoria(categoriaForm: NgForm) {
    this.categoriaService.adicionar(this.categoria)
      .then(() => {
        this.messageService.add(
          {severity:'success', summary:'Service Message', detail:'Categoria adicionado com sucesso!'});

      categoriaForm.reset()
      this.pesquisar()
      this.categoria = new Categoria()
    } )
  .catch(erro => this.errorHandler.handle(erro))
  }

  buscarPeloCodigo(codigo: number) {
    this.categoriaService.buscarPeloCodigo(codigo)
      .then(categoria => {
      this.categoria = categoria
     })
  }

  atualizarCategoria(codigo) {
    //console.log(categoria.codigo)
    this.categoriaService.atualizar(this.categoria, codigo)
      .then(categoria => {
        this.categoria = categoria

        this.messageService.add(
          {severity:'success', summary:'Service Message', detail:'Categoria atualizada com sucesso!'});
          //this.atualizarTitulo() // <--------- TITULO ATUALIZA
          this.pesquisar()
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

  confirmarExclusao(categoria: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir essa categoria?',
      accept: () => {
        this.excluir(categoria)
      }
    })
  }

  excluir(categoria: any) {
    this.categoriaService.excluir(categoria.codigo)
      .then(() => {
       this.pesquisar()
        //console.log('Excluído')
        this.messageService.add(
          {severity:'success', summary:'Service Message', detail:'Categoria excluído com sucesso!'})
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

  limpar() {
    this.categoria = new Categoria()
  }

}



/*

 categorias = [
    { codigo: "1", nome: "Sacola" },
    { codigo: "2", nome: "Agua"},
    { codigo: "3", nome: "Luz"},
    { codigo: "4", nome: "Escritorio" },
    { codigo: "5", nome: "Compras" },
    { codigo: "6", nome: "Outras" }
  ]

  */
