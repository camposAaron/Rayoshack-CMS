import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habilitado'
})
export class HabiltadoPipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      return 'habilitado';
    }else{
      return 'deshabilitado';
    }
  }

}
