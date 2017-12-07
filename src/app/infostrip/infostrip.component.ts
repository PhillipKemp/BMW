import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { quickFadeAnimation } from '../animations/quickfade.animation';

@Component({
  selector: 'app-infostrip',
  templateUrl: './infostrip.component.html',
  styleUrls: ['./infostrip.component.scss'],
  animations: [quickFadeAnimation]
})
export class InfostripComponent implements OnInit {

  amountFinancialServices: any;
  financialService: any;

  amountSocialMedia: any;
  socialMedia: any;

  amountDirections: any;
  directions: any;

  miniOptions: [any];
  miniMenu: any;

  constructor(private contentService : ContentService) { 
    this.financialService = contentService.getFinancialServiceContent(0);
    this.amountFinancialServices = contentService.financialServiceContent.length;

    this.socialMedia = contentService.getSocialMediaContent(0);
    this.amountSocialMedia = contentService.socialMediaContent.length;

    this.directions = contentService.getDirectionsContent(0);
    this.amountDirections = contentService.directionContent.length;

    this.miniOptions =  contentService.miniMenuContent[0].options;
    this.miniMenu = contentService.miniMenuContent;
  }

  prevFinancialServices : Function = function(){
   this.financialService = this.contentService.getPrevFinancialService(this.financialService.index)
  } 
  nextFinancialServices : Function = function(){
    this.financialService = this.contentService.getNextFinancialService(this.financialService.index)
  } 

  prevSocialMedia : Function = function(){
    this.socialMedia = this.contentService.getPrevSocialMedia(this.socialMedia.index)
  } 
  nextSocialMedia : Function = function(){
    this.socialMedia = this.contentService.getNextSocialMedia(this.socialMedia.index)
  } 

  prevDirections : Function = function(){
    this.directions = this.contentService.getPrevDirections(this.directions.index)
  } 
  nextDirections : Function = function(){
    this.directions = this.contentService.getNextDirections(this.directions.index)
  } 

  changeTab: Function = function(tab){
    this.miniOptions =  tab.options;
    this.miniMenu.forEach(element => {
      element.active = false;
    });

    tab.active = true;
  }


  ngOnInit() {
   

    
  }

}
