import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  @Input() producto!: Producto;
  public carrete!: string[];

  constructor() { }

  ngOnInit(): void {
    this.carrete = this.producto.galeria;
    console.log(this.producto.galeria);
  }

  outOfCarrete(img: string){
    console.log(img);
  }

}
