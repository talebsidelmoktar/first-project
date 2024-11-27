import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isAuth:boolean=false;
  constructor(private authService: AuthService) { }
 
  ngOnInit(): void {
     this.isAuth=this.authService.isAuthenticated();
  }

  onSignin(){
    this.authService.signin();
    this.isAuth=this.authService.isAuthenticated();
    console.log(this.authService.isAuthenticated())
  }
  onSignout(){
    this.authService.signout();
    this.isAuth=this.authService.isAuthenticated();
    console.log(this.authService.isAuthenticated())
  }
  
}
