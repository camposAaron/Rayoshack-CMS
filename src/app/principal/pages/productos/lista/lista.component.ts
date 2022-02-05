import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent{

  toFindValue: string = "";
  category: string = "";
  branch: string = "";
  stock: boolean = true;


  constructor() { }

  changeValue(value: string){
    this.toFindValue = value;
  }
  
  changeCategory(value: string){
    this.category = value;
  }
  
  changeBranch(value: string){
    this.branch = value;
  }

  changeStock(value: boolean){
    this.stock = value;
  }

}
