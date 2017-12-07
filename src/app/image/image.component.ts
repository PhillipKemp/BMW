import { Component, OnInit } from '@angular/core';
import { ImageService} from '../services/image.service';
import { slowFadeAnimation } from '../animations/slowfade.animation';
import {Observable} from 'rxjs'


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  animations: [slowFadeAnimation],
})
export class ImageComponent implements OnInit {

  count: any = 0;


  constructor(private imageService:ImageService) { 
    Observable.interval(10000)
      .subscribe(i => { 
        this.nextImage();
      })
  }


  nextImage: Function = function(){
    this.count++;
    if(this.count == this.sliderImages.length)
      this.count = 0;

    this.openImage(this.sliderImages[this.count]);
  }

  prevImage: Function = function(){
    this.count--;
    if(this.count < 0)
      this.count = this.sliderImages.length - 1;

    this.openImage(this.sliderImages[this.count]);
  }

  

  sliderImages: object[] = [];
  mainImage: {};

  state: string = 'default';

  openImage: Function = function(thumb){
    this.sliderImages.forEach(element => {
      element["showing"] = false;
    });
    thumb['showing'] = true;
    this.state = (this.state === 'default' ? 'change' : 'default');

    this.count = this.sliderImages.findIndex(i => i.img == thumb.img);
    
    setTimeout(() => {
      this.mainImage = thumb;
    }, 300);    
  };

  

  ngOnInit() {
    this.sliderImages = this.imageService.getImages();
    this.mainImage = this.sliderImages[0];
    this.mainImage["showing"] = true;
  }

}
