import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RouteService } from '../services/route.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private routerService: RouteService, public dialog: MatDialog) { }
  homeView() {
    this.routerService.navigateToHome();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogboxComponent, {
      height: '110px',
      width: '380px'
    });
  }
  @Input()
  loggedIn:boolean=false
}
