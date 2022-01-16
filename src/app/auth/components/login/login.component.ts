import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../models/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: Login = {
    email: '',
    password: ''
  };

  public errorMessage: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.user).subscribe(
      resp => {
        console.log(resp);
        localStorage.setItem('x-token', resp.token);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        if(err.error.msg){
         this.errorMessage =  err.error.msg; 
        }else{
          this.errorMessage = err.error.errors[0].msg;
        }
      }
    )
}
  
}
