import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FinderComponent } from './lista/finder/finder.component';
import { TableComponent } from './lista/table/table.component';
import { ImgPipe } from './pipes/img.pipe';


@NgModule({
  declarations: [
      ListaComponent,
      DetalleComponent,
      FinderComponent,
      TableComponent,
      ImgPipe
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule
  ]
})
export class ProductosModule { }
