import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { RouteService } from '../services/route.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private loginService: LoginService, private routerService: RouteService, private _snackBar: MatSnackBar) { }

  loginForm = this.fb.group({
    adminCode: ['', Validators.required],
    passCode: ['', Validators.required]
  })

  @Output() isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  onSubmit() {
    this.loginService.login(this.loginForm.value);
    if (this.loginService.isLoggedIn) {
      this._snackBar.open('Logged in successfully', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      })
      this.isLoggedIn.emit(true)
      this.routerService.navigateToOrderRequests();
    }
    else {
      if (!(document.getElementById('invalidTag'))) {
        let column = document.getElementById('tag')
        let warn = document.createElement('h4')
        warn.id='invalidTag'
        warn.style.color = 'red'
        warn.innerText = 'Invalid Credentials'
        column?.appendChild(warn)
      }
    }
  }

}
