import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(loginForm: any) {
    if (loginForm.adminCode == 'Shiva@123' && loginForm.passCode == 'Shiva@96') {
      this.isLoggedIn = true;
    }
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
