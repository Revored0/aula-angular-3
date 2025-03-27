import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    genero: new FormControl('', Validators.required),
    termos: new FormControl(false, Validators.requiredTrue), 
    etnia: new FormControl('', Validators.required), 
  });

  dadosCadastrados: any = null;

  salvar() {
    if (this.pessoaForm.valid) {
      this.dadosCadastrados = { ...this.pessoaForm.value }; 
    }
  }
  
  
}

