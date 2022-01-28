import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { PrincipalComponent } from './principal.component';

import { PromocionesComponent } from './pages/promociones/promociones.component';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    PromocionesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule
  ]
})
export class PrincipalModule { }
