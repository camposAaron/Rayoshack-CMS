import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria, Producto } from 'src/app/models';
import { ProductosServicesService } from '../../services/productos-services.service';

@Component({
  selector: 'product-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  public productos!: Producto[];
  public categoria!: Categoria[];
  
 public displayedColumns: string[] = ['portada', 'marca',
      'modelo', 'categoria', 'precio', 'calificacion', 'stock',' '];

 @ViewChild(MatPaginator)paginator?: MatPaginator;
  
 public dataSource = new MatTableDataSource(this.productos);

  constructor(
    private _productService: ProductosServicesService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }
  
  getProductos(){
    this._productService.getProducts().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.dataSource = new MatTableDataSource<any>(this.productos);
        this.dataSource.paginator =  this.paginator!;
      }
    });
  }
}


