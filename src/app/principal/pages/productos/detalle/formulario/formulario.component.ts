import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() producto!: Producto;
  public formProduct!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formProduct = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      detalles: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      promocion: [''],
      descuento: [''],
      stock: ['', [Validators.required]]
    });

    this.setProductData();
  }

  setProductData() {
    this.formProduct.patchValue(this.producto)      
  }

  getSelectsData(){
        
  }

  save() {
    console.log(this.formProduct.value);
  }

}
