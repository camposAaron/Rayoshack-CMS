import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Producto, Categoria } from 'src/app/models';
import { environment } from 'src/environments/environment';

interface productRequest{
  productos : Producto[],
  total : number
}

@Injectable({
  providedIn: 'root'
})
export class ProductosServicesService {

  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl+'/producto').pipe(
      map( (res:any) => res.productos)
    )
  }

  getProductByid(id:string):Observable<Producto>{
    return this.http.get<Producto>(this.baseUrl+'/producto/'+id);
  }

  getCategories(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl+'/categoria').pipe(
      map((res:any) => res.categorias)
    )
  }
}
