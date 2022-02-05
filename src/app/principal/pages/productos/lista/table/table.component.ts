import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Categoria, Producto } from 'src/app/models';
import { ProductosServicesService } from '../../services/productos-services.service';
import { FinderService } from 'src/app/shared/services/finder.service';

@Component({
  selector: 'product-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() toFindValue!: string;

  public productos!: Producto[];
  public categoria!: Categoria[];

  public displayedColumns: string[] = ['portada', 'marca',
    'modelo', 'categoria.nombre', 'precio', 'stock', ' '];

  public dataSource = new MatTableDataSource(this.productos);

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  productos$!: Observable<Producto[]>;
  private searchTerms = new Subject<string>();



  constructor(
    private _productService: ProductosServicesService,
    private _finderService: FinderService
  ) { }

  ngOnInit(): void {
    this.getProductos();
  }


  ngOnChanges(changes: SimpleChanges) {
    this.searchTerms.next(changes['toFindValue'].currentValue);
    this.applyFilter();
  }

  applyFilter() {
    
    this.productos$ = this.searchTerms.pipe(
      //esperar 300 milisegundos 
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => {

        if (!term.trim()) {
          return this._productService.getProducts();
        } else {
          return this._finderService.findProduct(term.trim())
        }
      })
    );

    this.productos$.subscribe({
      next: (res: any) => {
        this.productos = res;
        this.dataSource.data = this.productos;
      }
    });
  }

  getProductos() {
    this._productService.getProducts().subscribe({
      next: (productos) => {
        this.productos = productos;
        this.dataSource.data = this.productos;
        this.dataSource.paginator = this.paginator!;
      }
    });
  }

  
}


