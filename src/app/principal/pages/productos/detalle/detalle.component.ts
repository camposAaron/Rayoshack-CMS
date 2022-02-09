import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models';
import { ProductosServicesService } from '../services/productos-services.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  private id!: string;
  public producto!: Producto;

  constructor(
    private _rutaActiva: ActivatedRoute,
    private location: Location,
    private _productoService: ProductosServicesService
  ) { }

  ngOnInit(): void {

    this._rutaActiva.params.subscribe(params => {
      this.id = params['id']
    })

    this._productoService.getProductByid(this.id).subscribe({
      next: (producto: Producto) => {
        this.producto = producto;
      },
      error: (err) => {
        this.location.back();
      }
    });
  }

}
