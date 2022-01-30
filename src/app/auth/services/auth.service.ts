import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Auth, Login } from '../models/usuario';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl + '/auth/login'

  constructor(
    private http: HttpClient,
    private router:Router
  ) { }

  signIn(user: Login):Observable<Auth>{
      return this.http.post<Auth>(this.baseUrl, user);
  }

  isLoggedIn():Boolean{
    return !!localStorage.getItem('x-token');
  }

  logeout(){
    localStorage.removeItem('x-token');
    this.router.navigate(['/auth']);
  }
}
