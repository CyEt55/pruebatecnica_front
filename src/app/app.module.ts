import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenedorListComponent } from './contenedor-list/contenedor-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AddComponent } from './add/add.component';
import { ContenedorEditComponent } from './contenedor-edit/contenedor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorListComponent,
    TopBarComponent,
    AddComponent,
    ContenedorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ContenedorListComponent },
      { path: 'addContenedor', component: AddComponent },
      { path: 'editar/:id', component: ContenedorEditComponent }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
