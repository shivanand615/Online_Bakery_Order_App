import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private router: Router) { }
  navigateToHome() {
    this.router.navigate([""])
  }

  navigateToLoginView() {
    this.router.navigate(["login"])
  }

  navigateToOrderRequests() {
    this.router.navigate(["order-request"]);
  }

  navigateToOrderConfirmation(id: number) {
    this.router.navigate([`menu/orderConfirm/${id}`])
  }
}
