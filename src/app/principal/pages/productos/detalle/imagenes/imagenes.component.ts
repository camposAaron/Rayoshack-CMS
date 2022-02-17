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
  public previsualImages!: string[];


  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.carrete = this.producto.galeria;
  }

  //sacar imagen de carrete
  outOfCarrete(img: string) {
    this.carrete.splice(this.carrete.indexOf(img), 1);
  }

  fileCapture(event: any): any {
    const imagen = event.target.files[0];

    console.log(imagen);

    if (['image/jpeg','image/png','image/jpg'].includes(imagen.type)) {
      console.log('Si es una imagen');
      this.carrete.push(imagen)
      this.blobFile(imagen).then((res: any) => {
        this.carrete.push = res.base;
      });
    } else {
      console.log('No es imagen');
    }
    console.log(event.target.files);
  }


  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };

    } catch (e) {
      reject({
        error: e
      })

    }
  })
}
