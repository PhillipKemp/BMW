import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMainMenuItems : Function = function(){

    var menu = [];

    menu.push({active: true, name: "Home", href: "/home"});
    menu.push({active: false, name: "1", href: "/1"});
    menu.push({active: false, name: "3", href: "/3"});
    menu.push({active: false, name: "5", href: "/5"});
    menu.push({active: false, name: "6", href: "/6"});
    menu.push({active: false, name: "7", href: "/7"});
    menu.push({active: false, name: "X", href: "/X"});
    menu.push({active: false, name: "Z4", href: "/Z4"});
    menu.push({active: false, name: "M", href: "/M"});
    menu.push({active: false, name: "Approved Used Cars", href: "/approvedusedcars"});
    menu.push({active: false, name: "Owner's Circle", href: "/ownerscircle"});
    menu.push({active: false, name: "BMW Driver Training", href: "/", dropdown: true, options:[
      {name: 'Overview', href:'/overview'},
      {name: 'About Us', href:'/aboutus'},
      {name: 'Courses', href:'/courses'},
      {name: 'Corporate and Team Events', href:'/corporateandteam'},
      {name: 'Instructors', href:'/instructors'},
      {name: 'How to find Us', href:'/howtofindus'},
    ]});

    return menu;

  };

  getSecondaryMenuItems: Function = function(){
    var menu = [];

    menu.push({ name: "Virtual Dealer", href:"/vitualdealer"});
    menu.push({ name: "Products", href:"/products"});
    menu.push({ name: "Services", href:"/services"});
    menu.push({ name: "BMW Driver Training", href:"/bmwdrivertraining"});
    menu.push({ name: "Lifestyle & Accessories", href:"/lifestyleandaccessories"});
    menu.push({ name: "BMW Financial Services", href:"/bmwfinancialservices"});

    return menu;
  }


}
