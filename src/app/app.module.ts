import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/Router';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ImageComponent } from './image/image.component';
import { Type1Component } from './type1/type1.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ImageService } from './services/image.service';
import { ContentService } from './services/content.service';
import { MenuService } from './services/menu.service';
import { InfostripComponent } from './infostrip/infostrip.component';
import { FooterComponent } from './footer/footer.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

//import {  } from '@angular/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    ImageComponent,
    Type1Component,
    HomeComponent,
    InfostripComponent,
    FooterComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home',  },
      { path: "home", component: HomeComponent },
      { path: "placeholder", component: PlaceholderComponent}
    ]),
    AngularFontAwesomeModule
  ],
  providers: [ImageService, ContentService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
