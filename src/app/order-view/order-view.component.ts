import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouteService } from '../services/route.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent {

  constructor(private activatedRoute: ActivatedRoute, private routeService: RouteService, private _snackBar: MatSnackBar, private orderService: OrderService, private menuService: MenuService, private fb: FormBuilder) {
    this.minDate.setDate(this.minDate.getDate());
  }
  submitStatus: boolean = false;
  orderForm = this.fb.group({
    itemName: '',
    quantity: [0, Validators.required],
    name: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]/)]],
    totalAmount: [0,],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z+_.-]+@[a-zA-Z0-9.-]+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]/)]],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required,Validators.pattern(/^[0-9]{5,6}$/)]]
    }),
    orderDate: ['',]
  })
  get name() { return this.orderForm.get("name") }
  get email() { return this.orderForm.get("email") }
  get age() { return this.orderForm.get("age") }
  get phone() { return this.orderForm.get("phone") }
  get street() { return this.orderForm.get("street") }
  get city() { return this.orderForm.get("city") }
  get state() { return this.orderForm.get("state") }
  get zipCode() { return this.orderForm.get("zipCode") }
  get quantity() { return this.orderForm.get("quantity") }
  get orderDate() { return this.minDate }

  minDate: Date = new Date();

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
      this.menuService.getOrder(+id).subscribe(data => {
        this.order = data;
        this.submitStatus = false;
      });
    });
  }
  order: any;
  canDeactivate() {
    if (!this.submitStatus)
      this.submitStatus = confirm("You have not submitted a request to this order. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
  }

  total = 0;

  quantityChanges() {
    this.total = Number(this.orderForm.value.quantity) * this.order.price;
    this.orderForm.value.quantity = Number(this.orderForm.value.quantity) * this.order.price;
  }

  onSubmit() {
    this.orderForm.value.itemName = this.order.itemName;
    this.orderForm.value.orderDate = String(this.minDate).slice(0, 24)
    this.orderService.submitOrder(this.orderForm.value).subscribe({
      next: data => {
        this._snackBar.open('Congrats!!You have ordered Successfully!!', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        })
        this.submitStatus = true;
        this.routeService.navigateToOrderConfirmation(data.id)

      },
      error: err => {
        this._snackBar.open('Failed to register user !! Please Try Again Later', 'Failure', {
          duration: 3000,
          panelClass: ['mat-toolbar', 'mat-warn']
        });
      }
    });
  }
}
