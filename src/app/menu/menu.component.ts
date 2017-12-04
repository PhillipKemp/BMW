import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuItemsMain : any[] = [];
  menuItemsSecondary : any[] = [];

  changeState: Function = function(item){
    item.state = item.state == 'inactive' ? 'active' : 'inactive';
  };

  ngOnInit() {

    this.menuItemsMain.push({ name: "Home", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "1", href: "/1", state:'inactive' });
    this.menuItemsMain.push({ name: "3", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "5", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "6", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "7", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "X", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "Z4", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "M", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "Approved Used Cars", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "Owner's Circle", href: "/", state:'inactive' });
    this.menuItemsMain.push({ name: "BMW Driver Training", href: "/", state:'inactive' });

    this.menuItemsSecondary.push({ name: "Virtual Dealer", href:"", state:'inactive' });
    this.menuItemsSecondary.push({ name: "Products", href:"", state:'inactive' });
    this.menuItemsSecondary.push({ name: "Services", href:"", state:'inactive' });
    this.menuItemsSecondary.push({ name: "BMW Driver Training", href:"", state:'inactive' });
    this.menuItemsSecondary.push({ name: "Lifestyle & Accessories", href:"", state:'inactive' });
    this.menuItemsSecondary.push({ name: "BMW Financial Services", href:"", state:'inactive' });

  }

}
