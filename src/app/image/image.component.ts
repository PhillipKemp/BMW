import { Component, OnInit } from '@angular/core';
import { ImageService} from '../services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(private imageService:ImageService) { 

  }

  sliderImages: object[] = [];
  mainImage: {};
  imagesToShow: number = 0;

  openImage: Function = function(thumb){
    this.sliderImages.forEach(element => {
      element["showing"] = false;
    });

    thumb['showing'] = true;

    this.mainImage = thumb;
  };

  ngOnInit() {
    this.sliderImages = this.imageService.getImages();
    this.imagesToShow = this.sliderImages.length;
    this.mainImage = this.sliderImages[0];
    this.mainImage["showing"] = true;
  }

}
