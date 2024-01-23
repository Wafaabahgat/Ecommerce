import { Component, OnInit } from '@angular/core';


import { MainSliderComponent } from '../main-slider/main-slider.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AllProductsComponent } from '../all-products/all-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
   
    MainSliderComponent,
    CategoriesComponent,
    AllProductsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
