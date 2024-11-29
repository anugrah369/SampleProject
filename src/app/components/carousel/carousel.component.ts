import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselElements = [{
    thumbImage : 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/slide-home-02-1-100x50.jpg',
    mainImage : 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/slide-home-02-1.jpg',
    layerOneText : 'solution',
    layerTwoText : 'BUSINESS COMMUNICATION IS THE SHARING',
    layerThreeText : '100% success',
    layerFourText : 'Explore More'
  },
  {
    thumbImage : 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/slide-home-02-2-100x50.jpg',
    mainImage : 'http://themes.roninwp.com/cronus/wp-content/uploads/2018/04/slide-home-02-2.jpg',
    layerOneText : 'Awesome services',
    layerTwoText : 'BUSINESS COMMUNICATION IS THE SHARING',
    layerThreeText : 'grow up your business',
    layerFourText : 'Explore More 2'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
