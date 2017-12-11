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
import { Type3Component } from './type3/type3.component';
import { Type5Component } from './type5/type5.component';
import { Type6Component } from './type6/type6.component';
import { Type7Component } from './type7/type7.component';
import { TypeXComponent } from './type-x/type-x.component';
import { TypeZ4Component } from './type-z4/type-z4.component';
import { TypeMComponent } from './type-m/type-m.component';
import { ApprovedUsedCarsComponent } from './approved-used-cars/approved-used-cars.component';
import { OwnersCircleComponent } from './owners-circle/owners-circle.component';
import { BmwDriverTrainingComponent } from './bmw-driver-training/bmw-driver-training.component';
import { VirtualDealerComponent } from './virtual-dealer/virtual-dealer.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { LifestyleAndAccessoriesComponent } from './lifestyle-and-accessories/lifestyle-and-accessories.component';
import { BmwFinancialServicesComponent } from './bmw-financial-services/bmw-financial-services.component';
import { DriverTrainingComponent } from './driver-training/driver-training.component';
import { OverviewComponent } from './overview/overview.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursesComponent } from './courses/courses.component';
import { CorporateAndTeamEventsComponent } from './corporate-and-team-events/corporate-and-team-events.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { HowToFindUsComponent } from './how-to-find-us/how-to-find-us.component';
import { CollisionAvoidanceComponent } from './collision-avoidance/collision-avoidance.component';
import { HighPerformanceDrivingComponent } from './high-performance-driving/high-performance-driving.component';
import { DefensiveDrivingComponent } from './defensive-driving/defensive-driving.component';
import { HijackPriventionComponent } from './hijack-privention/hijack-privention.component';
import { PackagesComponent } from './packages/packages.component';
import { CoursePaymentComponent } from './course-payment/course-payment.component';
import { VirtualAction } from 'rxjs/scheduler/VirtualTimeScheduler';
import { SocialMediaComponent } from './social-media/social-media.component';
import { DirectionsComponent } from './directions/directions.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { DealerLocatorComponent } from './dealer-locator/dealer-locator.component';
import { LegislationComponent } from './legislation/legislation.component';
import { InternetConnectionsComponent } from './internet-connections/internet-connections.component';

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
    PlaceholderComponent,
    Type3Component,
    Type5Component,
    Type6Component,
    Type7Component,
    TypeXComponent,
    TypeZ4Component,
    TypeMComponent,
    ApprovedUsedCarsComponent,
    OwnersCircleComponent,
    BmwDriverTrainingComponent,
    VirtualDealerComponent,
    ProductsComponent,
    ServicesComponent,
    LifestyleAndAccessoriesComponent,
    BmwFinancialServicesComponent,
    DriverTrainingComponent,
    OverviewComponent,
    AboutusComponent,
    CoursesComponent,
    CorporateAndTeamEventsComponent,
    InstructorsComponent,
    HowToFindUsComponent,
    CollisionAvoidanceComponent,
    HighPerformanceDrivingComponent,
    DefensiveDrivingComponent,
    HijackPriventionComponent,
    PackagesComponent,
    CoursePaymentComponent,
    SocialMediaComponent,
    DirectionsComponent,
    SitemapComponent,
    DealerLocatorComponent,
    LegislationComponent,
    InternetConnectionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home',  },
      { path: "home", component: HomeComponent },
      { path: "1", component: Type1Component},
      { path: "3", component: Type3Component},
      { path: "5", component: Type5Component},
      { path: "6", component: Type6Component},
      { path: "7", component: Type7Component},
      { path: "X", component: TypeXComponent},
      { path: "Z4", component: TypeZ4Component},
      { path: "M", component: TypeMComponent},
      { path: "approvedusedcars", component: ApprovedUsedCarsComponent},
      { path: "ownerscircle", component: OwnersCircleComponent},
      { path: "bmwdrivertraining", component: OwnersCircleComponent},
      { path: "vitualdealer", component: VirtualDealerComponent},
      { path: "products", component: ProductsComponent},
      { path: "services", component: ServicesComponent},
      { path: "lifestyleandaccessories", component: LifestyleAndAccessoriesComponent},
      { path: "bmwfinancialservices", component: BmwFinancialServicesComponent},
      { path: "drivertraining", component: BmwDriverTrainingComponent},
      { path: "overview", component: OverviewComponent},
      { path: "aboutus", component: AboutusComponent},
      { path: "courses", component: CoursesComponent},
      { path: "corporateandteam", component: CorporateAndTeamEventsComponent},
      { path: "instructors", component: InstructorsComponent},
      { path: "howtofindus", component: HowToFindUsComponent},
      { path: "collisionavoidance", component: CollisionAvoidanceComponent},
      { path: "highperformancedriving", component: HighPerformanceDrivingComponent},
      { path: "defensivedriving", component: DefensiveDrivingComponent},
      { path: "hijackprevention", component: HijackPriventionComponent},
      { path: "packages", component: PackagesComponent},
      { path: "coursepayment", component: CoursePaymentComponent},
      { path: "social", component: SocialMediaComponent},
      { path: "directions", component: DirectionsComponent},
      { path: "sitemap", component: SitemapComponent},
      { path: "internetconnections", component: InternetConnectionsComponent},
      { path: "legislation", component: LegislationComponent},
      { path: "dealerlocator", component: DealerLocatorComponent},
    ]),
    AngularFontAwesomeModule
  ],
  providers: [ImageService, ContentService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
