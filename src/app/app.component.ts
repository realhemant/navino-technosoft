import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';

import * as $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'navino-technosoft';
  ngOnInit(){
    $.getScript("/assets/lib/counterup/counterup.min.js");
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  activeSlides: SlidesOutputData;

  slidesStore: any[];
  constructor() {
    this.slidesStore = [{
      img : 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg'
    },
    {
      img : 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg'
    }]
  }

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
}
