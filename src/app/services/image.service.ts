import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

    getImages : Function = function(){

    var sliderImages = [];

    sliderImages.push({
      img : '../../assets/1-cropped.jpg',
      details: {
        main: 'Joy has a passion for performance.',
        secondary: 'Experience BMW Performance Accessories.',
        button: {
          text: 'Click here to read more.',
          url: '/placeholder'
        },
        showing: 'false'
      }
    });

    sliderImages.push({
      img : '../../assets/2-cropped.jpg',
      details: {
        main: 'Joy has a passion for performance.',
        secondary: 'Experience BMW Performance Accessories.',
        button: {
          text: 'Click here to read more.',
          url: '/placeholder'
        },
        showing: 'false'
      }
    });

    sliderImages.push({
      img : '../../assets/3-cropped.jpg',
      details: {
        main: 'Joy has a passion for performance.',
        secondary: 'Experience BMW Performance Accessories.',
        button: {
          text: 'Click here to read more.',
          url: '/placeholder'
        },
        showing: 'false'
      }
    });

    sliderImages.push({
      img : '../../assets/4-cropped.jpg',
      details: {
        main: 'Joy has a passion for performance.',
        secondary: 'Experience BMW Performance Accessories.',
        button: {
          text: 'Click here to read more.',
          url: '/placeholder'
        },
        showing: 'false'
      }
    });

    return sliderImages;
  }

}
