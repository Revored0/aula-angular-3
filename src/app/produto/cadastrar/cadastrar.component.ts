import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  produtos: { nome: string; tipo: string }[] = [];
  nomeProduto: string = '';
  tipoProduto: string = '';

  
  constructor(private router: Router) {}

  cadastrarProduto() {
    if (!this.nomeProduto.trim() || !this.tipoProduto.trim()) {
      alert("Preencha todos os campos!");
      return;
    }

    const novoProduto = { nome: this.nomeProduto, tipo: this.tipoProduto };
    this.produtos.push(novoProduto);

    this.nomeProduto = '';
    this.tipoProduto = '';
  }

  deletarProdutos() {
    this.produtos = [];
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
