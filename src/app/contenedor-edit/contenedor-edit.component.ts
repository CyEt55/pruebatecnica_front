import { Component, OnInit } from '@angular/core';
import { ContenedorService } from '../services/contenedor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contenedor } from '../contenedor';
import { ActivatedRoute } from '@angular/router';
import { connect } from 'rxjs';

@Component({
  selector: 'app-contenedor-edit',
  templateUrl: './contenedor-edit.component.html',
  styles: [
  ]
})
export class ContenedorEditComponent implements OnInit {
  cont: Contenedor | any;
  form: FormGroup | any;
  contenedorIdFromRoute : any;

  selectedTipo?: string;

  constructor(
    private route: ActivatedRoute,
    private contenedorService: ContenedorService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.contenedorIdFromRoute = Number(routeParams.get('id'));

    this.contenedorService.get(this.contenedorIdFromRoute).subscribe({
      next: (data) => {
        this.cont = data;
      },
      error: (e) => console.error(e)
    });
  }

  SelectedTipo(value: string):void{
    this.selectedTipo = value;
  }

  onSubmit(contenedor: any) {

    this.cont.codigo_Propietario = contenedor.codigo_Propietario;
    this.cont.numero = contenedor.numero;
    this.cont.tipo = contenedor.tipo;
    this.cont.tamanio = contenedor.tamanio;
    this.cont.peso = contenedor.peso;
    this.cont.tara = contenedor.tara;

    this.contenedorService.put(this.contenedorIdFromRoute, contenedor).subscribe(
      () => this.router.navigate(['/'])
    );

  }
}
