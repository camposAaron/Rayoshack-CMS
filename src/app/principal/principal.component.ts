import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  public flat: boolean = true;

  toggleNavbar(flat:boolean){
    console.log(this.flat);
    this.flat = flat;
    console.log(this.flat);
  }
  
}
