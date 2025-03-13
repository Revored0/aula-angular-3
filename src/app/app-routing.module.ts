import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './produto/cadastrar/cadastrar.component';

const routes: Routes = [ 
  {
    path:'cadastrar-produto',component:CadastrarComponent
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
