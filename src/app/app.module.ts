import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
import { OrderViewComponent } from './order-view/order-view.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OrderSubmittedComponent } from './order-submitted/order-submitted.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    NavbarComponent,
    HeaderComponent,
    MenuItemComponent,
    SearchComponent,
    OrderViewComponent,
    LoginComponent,
    OrderRequestsComponent,
    PageNotFoundComponent,
    OrderSubmittedComponent,
    DialogboxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatDatepickerModule,
    MatSortModule,
    MatPaginatorModule,
    NgbModule,
    MatDividerModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
