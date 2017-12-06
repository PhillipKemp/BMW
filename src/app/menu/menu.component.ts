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

    this.menuItemsMain.push({ name: "Home", href: "/home"});
    this.menuItemsMain.push({ name: "1", href: "/1"});
    this.menuItemsMain.push({ name: "3", href: "/"});
    this.menuItemsMain.push({ name: "5", href: "/"});
    this.menuItemsMain.push({ name: "6", href: "/"});
    this.menuItemsMain.push({ name: "7", href: "/"});
    this.menuItemsMain.push({ name: "X", href: "/"});
    this.menuItemsMain.push({ name: "Z4", href: "/"});
    this.menuItemsMain.push({ name: "M", href: "/"});
    this.menuItemsMain.push({ name: "Approved Used Cars", href: "/"});
    this.menuItemsMain.push({ name: "Owner's Circle", href: "/"});
    this.menuItemsMain.push({ name: "BMW Driver Training", href: "/"});

    this.menuItemsSecondary.push({ name: "Virtual Dealer", href:""});
    this.menuItemsSecondary.push({ name: "Products", href:""});
    this.menuItemsSecondary.push({ name: "Services", href:""});
    this.menuItemsSecondary.push({ name: "BMW Driver Training", href:""});
    this.menuItemsSecondary.push({ name: "Lifestyle & Accessories", href:""});
    this.menuItemsSecondary.push({ name: "BMW Financial Services", href:""});

  }

}
