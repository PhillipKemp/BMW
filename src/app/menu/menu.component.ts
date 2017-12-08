import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItemsMain : any[] = [];
  menuItemsSecondary : any[] = [];

  constructor(private menuService:MenuService) { 
    this.menuItemsMain = menuService.getMainMenuItems();
    this.menuItemsSecondary = menuService.getSecondaryMenuItems();
  }

  makeMenuItemActive : Function = function(item){
    this.menuItemsMain.forEach(element => {
      element.active = false;
    });

    item.active = true;
  };

  ngOnInit() {

  }

}
