import { HtmlTagDefinition } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Categoria, Producto, Promocion } from 'src/app/models';
import { PromocionesService } from '../../../promociones/services/promociones.service';
import { ProductosServicesService } from '../../services/productos-services.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() producto!: Producto;
  
  public selected: any;

  formProduct: FormGroup = this.formBuilder.group({
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    descripcion: [''],
    detalles: [''],
    categoria: [null],
    promocion: [null],
    descuento: [''],
    stock: ['', [Validators.required]]
  });

  public categorias$!: Observable<Categoria[]>;
  public promociones$!: Observable<Promocion[]>;


  constructor(
    private formBuilder: FormBuilder,
    private _productServive: ProductosServicesService,
    private _promoService: PromocionesService
  ) { }

  ngOnInit(): void {
    //inicializando los observables
    this.categorias$ = this._productServive.getCategories();
    this.promociones$ = this._promoService.getPromociones();
    //inicualizando los inputs
    this.setProductData();
     this.selected = this.producto.categoria;
  }
  
  setProductData() {
    this.formProduct.patchValue(this.producto);
    this.formProduct.controls['categoria'].setValue(this.producto.categoria);
  }

  save() {
    console.log(this.formProduct.value);
  }

}
