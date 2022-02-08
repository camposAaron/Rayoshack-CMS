import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Categoria, Producto } from 'src/app/models';
import { ProductosServicesService } from '../../services/productos-services.service';
import { FinderService } from 'src/app/shared/services/finder.service';
import { Router } from '@angular/router';


@Component({
  selector: 'product-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  /*Filter inputs */
  @Input() toFindValue!: string;
  @Input() toBranch!: string;
  @Input() toCategory!: string;
  @Input() toStock!: boolean;

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
    private _finderService: FinderService,
    private _router: Router
  ) {

  }

  ngOnInit(): void {
    this.getProductos();
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['toFindValue']) {
      this.searchTerms.next(changes['toFindValue'].currentValue);
      this.search();
      this.applyFilter()
    }

    if (changes['toCategory'] || changes['toBranch'] || changes['toStock']) {
      this.applyFilter()
    }
  }

  search() {

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

  applyFilter() {

    console.log(this.toBranch, this.toCategory, this.toStock);

    let productsFiltered: Producto[] = [];


    // productsFiltered = this.productos.filter(p => p.stock === this.toStock);

    if (!this.toBranch && !this.toCategory && this.toStock) {
      console.log('here');
      this.getProductos();
    }

    if (!this.toBranch) {
      productsFiltered = this.productos.filter(p => p.categoria._id === this.toCategory);
    }

    if (!this.toCategory) {
      productsFiltered = this.productos.filter(p => p.marca === this.toBranch);
    }

    if (this.toBranch && this.toCategory && this.toStock) {
      productsFiltered = this.productos.filter(p => p.marca === this.toBranch
        && p.categoria._id === this.toCategory
      );

    }
    //verificar stock
    productsFiltered = productsFiltered.filter(p => p.stock === this.toStock)

    this.dataSource.data = productsFiltered;
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

  goToDetails(productId: string){
    this._router.navigateByUrl(`admin/productos/detalle/${productId}`);
  }
}


