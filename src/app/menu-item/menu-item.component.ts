import { Component, Input } from '@angular/core';
import { Menu } from '../models/menu';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  centered = false;
  @Input()
  menu?:Menu
}
