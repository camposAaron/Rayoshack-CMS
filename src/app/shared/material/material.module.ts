import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  exports : [
     MatCardModule,
     MatInputModule,
     MatButtonModule,
     MatToolbarModule,
     MatSidenavModule,
     MatListModule,
     MatIconModule

  ]
})
export class MaterialModule { }
