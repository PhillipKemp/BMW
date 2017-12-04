import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ImageComponent } from './image/image.component';
import { Type1Component } from './type1/type1.component';
import { RouterModule, Routes } from '@angular/Router';
import { HomeComponent } from './home/home.component';

//import {  } from '@angular/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopbarComponent,
    ImageComponent,
    Type1Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, data: { animation: 'normal' } },
      { path: "1", component: Type1Component, data: { animation: 'normal' } }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
