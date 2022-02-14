import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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

  @ViewChild('catSelect', {static: true})  catSelect!:HTMLSelectElement;
  @ViewChild('promSelect', {static: true}) promSelect!:HTMLSelectElement;


  @Input() producto!: Producto;
  public catSelected!: string;
  public promSelected!: string;

  @Input() disabled:boolean = true;

  formProduct: FormGroup = this.formBuilder.group({
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    descripcion: [''],
    detalles: [''],
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

    this.setProductData();
  
    this.categorias$ = this._productServive.getCategories();
    this.promociones$ = this._promoService.getPromociones();

    //categoria y promocion del producto
    this.catSelected = this.producto.categoria._id;
    this.promSelected = this.producto.promocion._id;

    this.formProduct.disable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['disabled']){
        (this.disabled) ? this.formProduct.disable() :  this.formProduct.enable();
    }
  }
  
  setProductData() {
    this.formProduct.patchValue(this.producto);
  }

  save() {
    const producto = this.formProduct.value;
    producto.categoria = this.catSelected;
    producto.promocion = this.promSelected;
    console.log(producto);
  }

}
