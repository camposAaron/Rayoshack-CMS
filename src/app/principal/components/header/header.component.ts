import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl : './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Output() toggleFlat =  new EventEmitter<boolean>()

  public logo: string = "../../../../assets/LOGO.svg";
  public flat: boolean = true;

  constructor(private authService: AuthService) { }
   
  logout(){
    this.authService.logeout();
  }

  toggleNav(){

    if(this.flat){
        this.toggleFlat.emit(true)
        this.flat = false;
    }else{
      this.toggleFlat.emit(false);
      this.flat = true;           
    }    
  }

}
