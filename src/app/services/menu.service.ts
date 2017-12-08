import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMainMenuItems : Function = function(){

    var menu = [];

    menu.push({active: true, name: "Home", href: "/home"});
    menu.push({active: false, name: "1", href: "/placeholder"});
    menu.push({active: false, name: "3", href: "/placeholder"});
    menu.push({active: false, name: "5", href: "/placeholder"});
    menu.push({active: false, name: "6", href: "/placeholder"});
    menu.push({active: false, name: "7", href: "/placeholder"});
    menu.push({active: false, name: "X", href: "/placeholder"});
    menu.push({active: false, name: "Z4", href: "/placeholder"});
    menu.push({active: false, name: "M", href: "/placeholder"});
    menu.push({active: false, name: "Approved Used Cars", href: "/placeholder"});
    menu.push({active: false, name: "Owner's Circle", href: "/placeholder"});
    menu.push({active: false, name: "BMW Driver Training", href: "/", dropdown: true, options:[
      {name: 'Overview', href:'/placeholder'},
      {name: 'About Us', href:'/placeholder'},
      {name: 'Courses', href:'/placeholder'},
      {name: 'Corporate and Team Events', href:'/placeholder'},
      {name: 'Instructors', href:'/placeholder'},
      {name: 'How to find Us', href:'/placeholder'},
    ]});

    return menu;

  };

  getSecondaryMenuItems: Function = function(){
    var menu = [];

    menu.push({ name: "Virtual Dealer", href:""});
    menu.push({ name: "Products", href:""});
    menu.push({ name: "Services", href:""});
    menu.push({ name: "BMW Driver Training", href:""});
    menu.push({ name: "Lifestyle & Accessories", href:""});
    menu.push({ name: "BMW Financial Services", href:""});

    return menu;
  }


}
