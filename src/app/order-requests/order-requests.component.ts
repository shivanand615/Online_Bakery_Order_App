import { AfterViewInit, Component, EventEmitter, ViewChild } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { AuthGuard } from '../services/auth.guard';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements AfterViewInit{
  displayedColumns: string[] = ['orderId', 'orderDate', 'itemName', 'quantity', 'name', 'phone', 'email', 'address', 'totalAmount'];
  orderRequests: Order[] = [];
  dataSource=new MatTableDataSource<Order>;
  isLoggedIn:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private orderService: OrderService, private _liveAnnouncer: LiveAnnouncer,private authService:LoginService) {
    
   }
  ngOnInit() {
    this.orderService.getAllOrderReqeusts().subscribe({
      next: data => {
        this.orderRequests =data;
        this.dataSource=new MatTableDataSource(this.orderRequests);
        this.dataSource.sort= this.sort;  
        this.dataSource.paginator = this.paginator;
        this.isLoggedIn.emit(true);
      },
      error: err => {
        alert(err);
      }
    });
  }

  @ViewChild(MatSort)
  sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  ngAfterViewInit() {
    this.dataSource.sort= this.sort;    
  }

  announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

 

  


}
