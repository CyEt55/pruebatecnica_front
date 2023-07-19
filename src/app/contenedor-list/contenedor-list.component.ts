import { Component, OnInit } from '@angular/core';
import { Contenedor } from '../contenedor';
import { ContenedorService } from '../services/contenedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenedor-list',
  templateUrl: './contenedor-list.component.html',
})
export class ContenedorListComponent {
  contenedores?: Contenedor[];

  constructor(
    private contenedorService: ContenedorService,
    private router: Router
    ){}

  ngOnInit(): void{
    this.obtenerContenedores();
  }

  obtenerContenedores(){
    this.contenedorService.getAll().subscribe({
      next: (data) => {
        this.contenedores = data;
      },
      error: (e) => console.error(e)
    });
  }

  handleDelete(id: any){
    this.contenedorService.delete(id).subscribe(
      (data) => {
        this.ngOnInit();
      }
    );
  }
}
