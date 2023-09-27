import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  URL: string = 'http://localhost:3001/orders';

  constructor(private http: HttpClient) { }

  submitOrder(order: any): Observable<any> {
    return this.http.post(this.URL, order);
  }

  getAllOrderReqeusts(): Observable<Order[]> {
    return this.http.get<Order[]>(this.URL)
  }

  getOrderDetails(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.URL}/${id}`)
  }
}
