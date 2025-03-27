import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aula-angular-3';
  constructor(private router: Router) {}
  
  voltar() {
    this.router.navigate(['/']); 
  }
  navegar() {
    this.router.navigate(['/cadastrar-produto']);
  }
  listar(){
    this.router.navigate(['/listar'])
  }
}
