import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SeeMorePipe } from '../see-more.pipe';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule, CarouselModule, SeeMorePipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent implements OnInit {
  productId: any;
  productDetails: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
    });
    this._ProductsService.getProductDetails(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
