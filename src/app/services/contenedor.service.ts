import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contenedor } from '../contenedor';

const baseUrl = 'http://localhost:5016/api/contenedores';

@Injectable({
    providedIn: 'root'
})

export class ContenedorService{
    constructor(private http: HttpClient){}

    getAll(): Observable<Contenedor[]>{
      return this.http.get<Contenedor[]>(baseUrl);
    }

    get(id: any): Observable<Contenedor>{
      return this.http.get<Contenedor>(`${baseUrl}/${id}`);
    }

    put(id: any, cont: object): Observable<Contenedor>{
      return this.http.put<Contenedor>(`${baseUrl}/${id}`, cont);
    }

    post(cont: object): Observable<Contenedor>{
      return this.http.post<any>(`${baseUrl}`, cont);
    }

    delete(id: object): Observable<Contenedor>{
      return this.http.delete<any>(`${baseUrl}/${id}`);
    }
  }
