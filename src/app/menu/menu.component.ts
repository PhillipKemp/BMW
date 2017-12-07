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

    this.menuItemsMain.push({active: true, name: "Home", href: "/home"});
    this.menuItemsMain.push({active: false, name: "1", href: "/1"});
    this.menuItemsMain.push({active: false, name: "3", href: "/"});
    this.menuItemsMain.push({active: false, name: "5", href: "/"});
    this.menuItemsMain.push({active: false, name: "6", href: "/"});
    this.menuItemsMain.push({active: false, name: "7", href: "/"});
    this.menuItemsMain.push({active: false, name: "X", href: "/"});
    this.menuItemsMain.push({active: false, name: "Z4", href: "/"});
    this.menuItemsMain.push({active: false, name: "M", href: "/"});
    this.menuItemsMain.push({active: false, name: "Approved Used Cars", href: "/"});
    this.menuItemsMain.push({active: false, name: "Owner's Circle", href: "/"});
    this.menuItemsMain.push({active: false, name: "BMW Driver Training", href: "/", dropdown: true, options:[
      {name: 'Overview', href:'/'},
      {name: 'About Us', href:'/'},
      {name: 'Courses', href:'/'},
      {name: 'Corporate and Team Events', href:'/'},
      {name: 'Instructors', href:'/'},
      {name: 'How to find Us', href:'/'},
    ]});

    this.menuItemsSecondary.push({ name: "Virtual Dealer", href:""});
    this.menuItemsSecondary.push({ name: "Products", href:""});
    this.menuItemsSecondary.push({ name: "Services", href:""});
    this.menuItemsSecondary.push({ name: "BMW Driver Training", href:""});
    this.menuItemsSecondary.push({ name: "Lifestyle & Accessories", href:""});
    this.menuItemsSecondary.push({ name: "BMW Financial Services", href:""});

  }

}
