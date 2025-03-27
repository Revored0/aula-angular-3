import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './produto/listar/listar.component';
import { CadastrarComponent } from './produto/cadastrar/cadastrar.component';

const routes: Routes = [ 
 
  {
    path:'listar',component:ListarComponent
  },
  {
    path:'cadastrar',component:CadastrarComponent 
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
