import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  miniMenuContent: [any] = [{
    name: 'Courses',
    active: true,
    options: [
        {
          name: 'Collision Avoidance',
          href: '/collisionavoidance'
        },
        {
          name: 'High Performance Driving',
          href: '/highperformancedriving'
        },
        {
          name: 'Defensing Driving',
          href: '/defensivedriving'
        },
        {
          name: 'Hijack Privention',
          href: '/hijackprevention'
        },
        {
          name: 'Packages',
          href: '/packages'
        },
        {
          name: 'Course Payment',
          href: '/coursepayment'
        }
      ]    
    },{
      name: 'Links',
      active: false,
      options: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Products',
          href: '/products'
        },
        {
          name: 'Sevices',
          href: '/services'
        },
        {
          name: 'Virtual Dealer',
          href: '/vitualdealer'
        }
        
      ]    
    }
  ];

  financialServiceContent: [any] = [
    {
      index: 0,
      name: 'BMW Financial Services',
      content: {
        text: 'Click here to view the latest exclusive offers from BMW Financial services.',
        href: '/'
      }
    },
    {
      index: 1,
      name: 'BMW Financial Services 1',
      content: {
        text: '1 - Click here to view the latest exclusive offers from BMW Financial services.',
        href: '/'
      }
    },
    {
      index: 2,
      name: 'BMW Financial Services 2',
      content: {
        text: '2 - Click here to view the latest exclusive offers from BMW Financial services.',
        href: '/'
      }
    }
  ];

  socialMediaContent: [any] = [
    {
      index: 0,
      url: '../../assets/Facebook.jpg',
      name: 'Facebook fan Page',
      content: {
        text: 'Join us on Facebook for the latest BMW Driver Training information, galleries and more.',
        href: '/'
      }
    },
    {
      index: 1,
      url: '../../assets/twitter-logo.png',
      name: 'Twitter fan Page',
      content: {
        text: 'Join us on Twitter for the latest BMW Driver Training information, galleries and more.',
        href: '/'
      }
    },
    {
      index: 2,
      url: '../../assets/Facebook.jpg',
      name: 'Facebook fan Page 2',
      content: {
        text: '2 - Join us on Facebook for the latest BMW Driver Training information, galleries and more.',
        href: '/'
      }
    }
  ];

  directionContent: [any] = [
    {
      index: 0,
      name: 'Driver Training Venue',
      content: {
        text: 'Find directions to BMW Driver Training, situated at the Kyalami Grand Prix Circuit. ',
        href: '/'
      }
    },
    {
      index: 1,
      name: 'Driver Training Venue 1',
      content: {
        text: '1 - Find directions to BMW Driver Training, situated at the Kyalami Grand Prix Circuit. ',
        href: '/'
      }
    },
    {
      index: 2,
      name: 'Driver Training Venue2',
      content: {
        text: '2 - Find directions to BMW Driver Training, situated at the Kyalami Grand Prix Circuit. ',
        href: '/'
      }
    }
  ];

  constructor() { }

  getFinancialServiceContent : Function = function(index){
    return this.financialServiceContent[index];
  }

  getSocialMediaContent : Function = function(index){
    return this.socialMediaContent[index];
  }

  getDirectionsContent : Function = function(index){
    return this.directionContent[index];
  }

  getPrevFinancialService: Function = function(currentIndex){
    var newIndex = currentIndex - 1;
    if(newIndex < 0){
      newIndex = this.financialServiceContent.length - 1;
    }

    return this.getFinancialServiceContent(newIndex);
  }

  getNextFinancialService: Function = function(currentIndex){
    var newIndex = currentIndex + 1;
    if(newIndex > this.financialServiceContent.length - 1){
      newIndex = 0;
    }

    return this.getFinancialServiceContent(newIndex);
  }

  getPrevSocialMedia: Function = function(currentIndex){
    var newIndex = currentIndex - 1;
    if(newIndex < 0){
      newIndex = this.socialMediaContent.length - 1;
    }

    return this.getSocialMediaContent(newIndex);
  }

  getNextSocialMedia: Function = function(currentIndex){
    var newIndex = currentIndex + 1;
    if(newIndex > this.socialMediaContent.length - 1){
      newIndex = 0;
    }

    return this.getSocialMediaContent(newIndex);
  }

  getPrevDirections: Function = function(currentIndex){
    var newIndex = currentIndex - 1;
    if(newIndex < 0){
      newIndex = this.directionContent.length - 1;
    }

    return this.getDirectionsContent(newIndex);
  }

  getNextDirections: Function = function(currentIndex){
    var newIndex = currentIndex + 1;
    if(newIndex > this.directionContent.length - 1){
      newIndex = 0;
    }

    return this.getDirectionsContent(newIndex);
  }

}
