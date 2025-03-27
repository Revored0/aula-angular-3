import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  toppings = new FormControl();
  toppingList = ['Masculino', 'Feminino', 'Prefiro não dizer'];

  isChecked: boolean = false;


  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/']); 
  }
  
}

