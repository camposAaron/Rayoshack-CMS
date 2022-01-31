import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public id!:  string;
  
  constructor(
    private _rutaActiva : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._rutaActiva.params.subscribe( params => {
      this.id = params['id']
    })

    console.log(this.id);
  }

}
