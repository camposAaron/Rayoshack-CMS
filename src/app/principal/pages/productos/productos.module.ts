import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FinderComponent } from './lista/finder/finder.component';
import { TableComponent } from './lista/table/table.component';
import { ImgPipe } from './pipes/img.pipe';
import { HabiltadoPipe } from './pipes/habiltado.pipe';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './detalle/formulario/formulario.component';

@NgModule({
  declarations: [
      ListaComponent,
      DetalleComponent,
      FinderComponent,
      TableComponent,
      ImgPipe,
      HabiltadoPipe,
      FormularioComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductosModule { }
