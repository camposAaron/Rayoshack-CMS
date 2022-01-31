import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public id!: string;

  constructor(
    private rutaActiva: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.rutaActiva.params.subscribe( params => {
        this.id = params['id'];
      });

      console.log(this.id);
  }

}
