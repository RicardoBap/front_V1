import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { UsuarioService } from './../usuario.service';
import { Permissao } from 'src/app/core/usuario.model';


class Usuario {
  codigo: number
  nome: string
  email: string
  senha: string
  senhaUsuario: string
  permissoes: Array<Permissao>
}

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css'],
  providers: [ UsuarioService ]
})
export class UsuarioAtualizarComponent implements OnInit {

  permissoes: Array<any>; // Selecão do usuario

  codigo: number
  usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const codigoUsuario = this.route.snapshot.params['codigo']
    if (codigoUsuario) {
      this.carregarUsuario(codigoUsuario)
    }

    this.carregarPermissoes();
    this.title.setTitle('Atualização de usuários')
  }

  atualizar(usuarioForm: NgForm) {
    this.atualizarUsuario(this.usuario.codigo)
  }

  atualizarUsuario(codigo: number) {
    this.usuarioService.atualizar(this.usuario, codigo)
    .then(usuario => {
      this.usuario = usuario
      //console.log(this.usuario)
      this.messageService.add(
        {severity:'success', summary:'Service Message', detail:'Usuário atualizado com sucesso!'});
    })
    .catch(erro => this.errorHandler.handle(erro))
  }


  carregarPermissoes() {
    this.usuarioService.getPermissoes()
      .then(permissoes => {
        this.permissoes = permissoes
        //.map(p => {
          //return { descricao: p.descricao, codigo: p.codigo }
        //})
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

  carregarUsuario(codigo: number) {
    this.usuarioService.buscarPeloCodigo(codigo)
      .then(usuario => {
        this.usuario = usuario
      })
      .catch(erro => this.errorHandler.handle(erro))
  }

}
