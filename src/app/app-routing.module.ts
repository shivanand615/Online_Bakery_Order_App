import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { LoginComponent } from './login/login.component';
import { OrderRequestsComponent } from './order-requests/order-requests.component';
import { AuthGuard } from './services/auth.guard';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { CanDeactivateGuard2 } from './services/orderview-deactivate.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderSubmittedComponent } from './order-submitted/order-submitted.component';

const routes: Routes = [
  { path: "menu", component: MenuListComponent },
  { path: "menu/:id", component: OrderViewComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "menu/orderConfirm/:id", component: OrderSubmittedComponent, canDeactivate: [CanDeactivateGuard2] },
  { path: "login", component: LoginComponent },
  { path: "order-request", component: OrderRequestsComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "menu", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
