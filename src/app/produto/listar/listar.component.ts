import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {


  displayedColumns: string[] = ['id', 'name', 'category','raca'];
  dataSource = [
    { id: 1, name: 'João Revoredo', category: 'Masculino',raca:'pardo' },
    { id: 2, name: 'Lucas', category: 'Masculino',raca:'pardo' },
    { id: 3, name: 'Tiago', category: 'Masculino', raca:'branco'},
    { id: 4, name: 'Maria', category: 'Feminino',raca:'negro'}
  ];


  constructor(private router: Router) {}

  cadastrar(){
    this.router.navigate(['/cadastrar'])
  }

}
