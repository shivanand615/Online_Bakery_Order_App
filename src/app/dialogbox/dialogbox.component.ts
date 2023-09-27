import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RouteService } from '../services/route.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {

  constructor(private loginService:LoginService,private _snackBar:MatSnackBar,private routerService:RouteService,private dialogRef: MatDialogRef<HeaderComponent>
    ){}

  logOut() {
    this.loginService.logOut();
    this._snackBar.open('Logged out successfully', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
    this.routerService.navigateToLoginView();
  }

}
