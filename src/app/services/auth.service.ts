import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean = false;
  public authSubject: Subject<boolean>=new Subject<boolean>()
  constructor() { }
  signin() {
    this.isAuth = true;
    this.emitAuthSubject();
  }
  emitAuthSubject(){
    this.authSubject.next(this.isAuthenticated())
  }
  signout() {
    this.isAuth = false;
    this.emitAuthSubject();
  }
  isAuthenticated(): boolean {
    return this.isAuth;
  }
}
