import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports : [
     MatCardModule,
     MatInputModule,
     MatButtonModule
  ]
})
export class MaterialModule { }
