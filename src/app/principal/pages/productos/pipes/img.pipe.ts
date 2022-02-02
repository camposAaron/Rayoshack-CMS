import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

// http://localhost:5000/uploads/products/skullcandy-Hesh2/a7cf97ce-628d-41c8-a435-0fb70f05abbf.jpg
private url =  'http://localhost:5000/uploads/products';
  
transform(value: string, name: string): string {
    return `${this.url}/${name}/${value}`;
  }

}
