import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductoInterfaces } from '../interfaces/producto-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient)

  constructor() { }

  getProducto () : Observable<ProductoInterfaces[]> {
   return this.http.get<ProductoInterfaces[]>("https://api.escuelajs.co/api/v1/products",)
  }

  getProductoOnly (numero : number) : Observable<ProductoInterfaces[]> {
   return this.http.get<ProductoInterfaces[]>( "https://api.escuelajs.co/api/v1/products" + numero,)
  }

  postProductoOnly (numero : number) : Observable<ProductoInterfaces[]> {
   return this.http.get<ProductoInterfaces[]>("https://api.escuelajs.co/api/v1/products" + numero,)
  }

}
