import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Promocion } from 'src/app/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {

  private baseUrl = environment.baseUrl +'/promocion';

  constructor(private http: HttpClient) { }

  getPromociones():Observable<Promocion[]>{
    return this.http.get<Promocion[]>(this.baseUrl).pipe(
      map( (res:any) =>  res.promociones )
    );
  }
  
}
