import { CategoriaCadastroComponent } from './categoria-cadastro/categoria-cadastro.component';
import { AuthGuard } from './../seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CategoriaCadastroComponent,
    canActivate: [ AuthGuard ], data: [ 'ROLE_PESQUISAR_CATEGORIA' ]
  },

  { path: 'nova', component: CategoriaCadastroComponent,
    canActivate: [ AuthGuard ], data: { roles: [ 'ROLE_CADASTRAR_CATEGORIA' ] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
