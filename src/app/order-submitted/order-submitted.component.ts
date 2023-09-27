import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order-submitted',
  templateUrl: './order-submitted.component.html',
  styleUrls: ['./order-submitted.component.css']
})
export class OrderSubmittedComponent {
  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }
  order:any={}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      let id = data.get('id') ?? 0;
      this.orderService.getOrderDetails(+id).subscribe(data => {
        this.order = data;
      });
    });    
  }
  submitStatus:boolean=false

  canDeactivate() {
    if (!this.submitStatus)
      this.submitStatus = confirm(" Are you sure you want go to leave?");
    return this.submitStatus;
  }
}
