import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models';


@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {

  @Input() producto!: Producto;
  public carrete!: any[];
  public previsualGalery!: string[];
  public fileDictionary!: Map<string, any>;
  private url = 'http://localhost:5000/uploads/products';



  constructor(
  ) { }

  ngOnInit(): void {
    this.previsualGalery = [];
    this.carrete = [];
    //si el producto tiene imagenes de galeria
    if (this.producto.galeria.length != 0 || this.producto.galeria) {

      this.producto.galeria.forEach((value, index) => {
        //crear imagen
        let image = new Image();
        image.src = this.transformImage(this.producto.nombre, value);

        console.log(image);

        image.width = 100;
        image.height = 100;

        //crear canvas
        var canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;    
  
        let context = canvas.getContext('2d');
        
        context?.drawImage(image, 0, 0);
        context?.stroke(); 


      });


    }
  }

  //sacar imagen de carrete
  outOfCarrete(img: string) {
    this.previsualGalery.splice(this.previsualGalery.indexOf(img), 1);
  }

  //generar imagen con URl del servidor
  transformImage(name: string, id: string) {
    return `${this.url}/${name}/${id}`;
  }

  //capturar imagenes y previsualizarlas
  fileCapture(event: any): any {
    const file = event.target.files[0];
    this.carrete.push(file);

    this.convertToBase64(file);
  }

  //convertir a base64
  convertToBase64(file: any) {

    if (['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      console.log('Si es una imagen');

      const reader = new FileReader();
      reader.onload = () => {
        this.previsualGalery.push(reader.result as string);
      }
      reader.readAsDataURL(file);

    } else {
      console.log('No es imagen');
    }

  }

 canvasResizetoFile(canvas:any,quality:any,fn:any){
    canvas.toBlob(function(blob:Blob) {
      fn(blob);
    },'image/jpeg',quality);
  };



}




