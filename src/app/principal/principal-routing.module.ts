import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './pages/productos/detalle/detalle.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
    {
      path : '', component : PrincipalComponent,
      children : [ //TODO: lazy load.
        {  path: 'productos',  
           loadChildren : () => import('./pages/productos/productos.module').then(m => m.ProductosModule)
        },
        {  path: 'promociones', component : PromocionesComponent },
        {  path: '', redirectTo: '/admin/productos', pathMatch: 'full'}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
