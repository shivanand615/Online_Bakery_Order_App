import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  URL: string = "http://localhost:3000/menu";
  constructor(private http: HttpClient) { }

  getAllMenuList(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.URL)
  }

  getOrder(id: number): Observable<any> {
    return this.http.get<Menu>(`${this.URL}/${id}`)
  }
}
