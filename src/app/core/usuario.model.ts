export class Usuario {
  codigo: number
  nome: string
  email: string
  senha: string
  senhaUsuario: string
  permissoes: Array<any>

  constructor(nome: string, email: string, senha: string, permissoes: Array<any>) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.permissoes = permissoes;
  }

}

export class Permissao {
  codigo: number;
  descricao: string
}
