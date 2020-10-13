import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { MessageService } from 'primeng/api';
import { NotAuthenticatedError } from '../seguranca/money-http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  handle(errorResponse: any) {
    let msg: string

    if ( typeof errorResponse === 'string' ) {
      msg = errorResponse
    }

    else if ( errorResponse.status === 400 || errorResponse.status === 404) {
      msg = errorResponse.error[0].mensagemUsuario;

      if(errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar essa ação'
      }

    } else if (errorResponse instanceof NotAuthenticatedError) {
      msg = 'Sua sessão expirou'
      this.router.navigate(['/login'])
    }

    else {
      msg = "Erro ao acessar serviço remoto. Tente novamente"
    }

    this.messageService.add({
      severity:'error', summary:'Service Message', detail: msg
    })
  }

}



/*
if (typeof errorResponse === 'string') {
  msg = errorResponse
} else if (errorResponse instanceof AuthHttpError) {
  msg = 'Sua sessão expirou'
} else if (errorResponse instanceof Response && errorResponse.status >= 400 && errorResponse.status <= 499) {
  let errors
  msg = 'Ocorreu um erro ao processar a sua solicitação

  if (errorResponse.status === 403) {
    msg = 'Você não tem permissão para executar essa ação
  }

  try {
    errorsResponse.json()
    msg = 'errors[0].mensagemUsuario
  } catch(e) {}

  console.error('Ocorreu um erro', errorResponse)
} else {
  msg = 'Erro ao acessar serviço remoto. Tente novamente.
  console.error('Ocorreu um erro', errorResponse)
}
this.toast.error(msg)
}
*/
