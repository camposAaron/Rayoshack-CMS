import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    LoginComponent
  ],
  providers : [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
