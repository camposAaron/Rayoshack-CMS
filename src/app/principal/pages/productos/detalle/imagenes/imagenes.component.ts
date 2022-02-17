import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  @Input() producto!: Producto;
  public carrete!: string[];
  public previsualGalery!: string[];


  constructor(
  ) { }

  ngOnInit(): void {
    this.carrete = [];
    this.previsualGalery = [];
  }

  //sacar imagen de carrete
  outOfCarrete(img: string) {
    this.previsualGalery.splice(this.carrete.indexOf(img), 1);
  }

  //capturar imagenes y previsualizarlas
  fileCapture(event: any): any {
    const file = event.target.files[0];

    console.log(file);
    this.carrete.push(file);
    

    if (['image/jpeg','image/png','image/jpg'].includes(file.type)) {
      console.log('Si es una imagen');
      
      const reader = new FileReader();
      reader.onload = () =>{
        this.previsualGalery.push(reader.result as string);
      }
      reader.readAsDataURL(file);
    
    } else {
      console.log('No es imagen');
    }
    console.log(event.target.files);
  }

}




