import { Component, OnInit } from '@angular/core';
import { UsuariosInterfaz } from '../usuarios-interfaz';
import { GitSearchService } from '../git-search.service.ts';

@Component({
  selector: 'app-buscar-usuarios',
  templateUrl: './buscar-usuarios.component.html',
  styleUrls: ['./buscar-usuarios.component.css']
})
export class BuscarUsuariosComponent implements OnInit {

  searchUsuarios: UsuariosInterfaz;
  searchQueryUsuarios: string;
  displayUsuarios: string;
  

  constructor(private GitSearchService: GitSearchService) {
    
   }

  ngOnInit() {
    this.searchQueryUsuarios = 'pedro';
    this.displayUsuarios = this.searchQueryUsuarios;
    this.buscarUsuarios();
  }

  buscarUsuarios =()=>{
    this.GitSearchService.usuarios(this.searchQueryUsuarios).then((response)=>{
      this.searchUsuarios = response;
      this.displayUsuarios= this.searchQueryUsuarios;
      //alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
    
  
  }

}