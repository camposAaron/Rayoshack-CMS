import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  toFindValue: string = ""
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: string){
    this.toFindValue = value;
  }

}
