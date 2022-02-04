import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime , map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  private baseUrl = environment.baseUrl;;
    
  constructor(
    private http: HttpClient
  ) { }

  findProduct(toFind:string):Observable<Producto[]>{
    return  this.http.get<Producto[]>(this.baseUrl+'/buscar/productos/'+toFind).pipe(
      map((res:any) => res.results)
    )
  }

}
