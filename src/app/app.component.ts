import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'first-project';
  isAuth:boolean=false;
   
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.authSubject.subscribe({
      next:(isAuth)=>this.isAuth=isAuth,
      error:(err)=>console.log(err),
      complete: ()=>console.log("complete")
    })
  }
}
