import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Input() producto!: Producto;

  constructor() { }

  ngOnInit(): void {
    
  }

  save(){

  }
  
}
