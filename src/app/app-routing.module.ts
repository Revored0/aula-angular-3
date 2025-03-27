import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './produto/cadastrar/cadastrar.component';
import { ListarComponent } from './produto/listar/listar.component';

const routes: Routes = [ 
  {
    path:'cadastrar-produto',component:CadastrarComponent
  },
  {
    path:'listar',component:ListarComponent
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
