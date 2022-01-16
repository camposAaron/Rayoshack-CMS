import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Auth, Login } from '../models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl + '/auth/login'

  constructor(
    private http: HttpClient
  ) { }

  signIn(user: Login):Observable<Auth>{
      return this.http.post<Auth>(this.baseUrl, user);
  }

}
