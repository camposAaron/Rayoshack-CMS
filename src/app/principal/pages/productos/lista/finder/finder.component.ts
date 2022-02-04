import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  
  @Output() toFind = new EventEmitter<string>();

  public value = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: string){
    this.toFind.emit(value);
  }

}
