import { Component } from '@angular/core';
import { Menu } from '../models/menu';
import { MenuService } from '../services/menu.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  animations:[trigger('scroll', [
    state('on', style({left: '-100px'})),
    transition('* => *', [
      style({left: '-100px'}),
      animate(10000, style({left: '100%'}))
    ])
  ])]
})
export class MenuListComponent {
  menuList: Menu[] = [];
  images=['../../assets/sweet-cupcakes-facebook-cover.jpg','../../assets/123.png','../../assets/1234.jpg']
  constructor(private menuService: MenuService,config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  menutotalList: Menu[] = [];

  ngOnInit(): void {
    this.menuService.getAllMenuList().subscribe({
      next: data => {
        this.menuList = data;
        this.menutotalList = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

  onSearchTextChanged(search: string) {
    if (search || search !== '') {
      this.menuList = this.menutotalList.filter((menu) =>
        menu?.itemName?.toLowerCase().startsWith(search.toLowerCase())
      );
    } else {
      this.menuList = this.menutotalList
    }
  }

  category: string = '';

  onCategoryChange() {
    if (this.category == '' || !this.category) {
      this.menuList = this.menutotalList
    }
    else {
      this.menuList = this.menutotalList.filter((menu) => menu.category == this.category)
    }
  }

  state = 0;

  scrollDone() {
    this.state++;
  }
}
