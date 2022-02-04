import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
    'modelo', 'categoria.nombre', 'precio', 'stock', ' '];

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  public dataSource = new MatTableDataSource(this.productos);

  @Input() toFindValue!: string;

  constructor(
    private _productService: ProductosServicesService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.applyFilter(changes['toFindValue'].currentValue);
  }

  applyFilter(toFindValue: string) {

    this.dataSource.filter = toFindValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getProductos() {
    this._productService.getProducts().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.dataSource = new MatTableDataSource<any>(this.productos);
        this.dataSource.paginator = this.paginator!;
      }
    });
  }
}


