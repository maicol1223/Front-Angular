import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductoInterfaces } from '../interfaces/producto-interfaces';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient)
 
  constructor() { }

  getObjetivos(): Observable<any[]> {
    return this.http.get<any>('http://localhost:8000/api/objetivos').pipe(
      map(response => Array.isArray(response) ? response : response.data) // Asegúrate de que sea un array
    );
  }

}
