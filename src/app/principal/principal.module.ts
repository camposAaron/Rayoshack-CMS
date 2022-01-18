import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from '../shared/shared.module';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { AppRoutingModule } from '../app-routing.module';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    PromocionesComponent,
    AsideComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MaterialModule
  ]
})
export class PrincipalModule { }
