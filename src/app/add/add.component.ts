import { Component, OnInit } from '@angular/core';
import { ContenedorService } from '../services/contenedor.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contenedor } from '../contenedor';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit{
  form: FormGroup | any;

  constructor(
    private contenedorService: ContenedorService,
    private formBuilder: FormBuilder,
    private router: Router
  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      codigo_Propietario: this.formBuilder.control(''),
      numero: this.formBuilder.control(''),
      tipo: this.formBuilder.control(''),
      tamanio: this.formBuilder.control(''),
      peso: this.formBuilder.control(''),
      tara: this.formBuilder.control('')
    });
}

  onSubmit(contenedor: Contenedor) {
    this.contenedorService.post(contenedor).subscribe(
      () => this.router.navigate(['/'])
    );
  }

}
