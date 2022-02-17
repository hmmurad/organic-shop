import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-single-product',
  templateUrl: '../single-product/single-product.component.html',
  styleUrls: ['../single-product/single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  dynamicSlides = [
    {
      id: 1,
      src: '../../../assets/images/products/2.png',
      alt: 'Side 1',
      title: 'Side 1',
    },
    {
      id: 2,
      src: '../../../assets/images/products/1.png',
      alt: 'Side 2',
      title: 'Side 2',
    },
    {
      id: 3,
      src: '../../../assets/images/products/3.png',
      alt: 'Side 3',
      title: 'Side 3',
    },
    {
      id: 4,
      src: '../../../assets/images/products/2.png',
      alt: 'Side 4',
      title: 'Side 4',
    },
    {
      id: 5,
      src: '../../../assets/images/products/1.png',
      alt: 'Side 5',
      title: 'Side 5',
    },
  ];
  constructor() {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: [
      '<i class="fas fa-arrow-left"> </i>',
      '<i class="fas fa-arrow-right"> </i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      760: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {}
}
