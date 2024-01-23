import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../categories/categories.component';
import { SliderComponent } from './slider/slider.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesComponent,
    SliderComponent,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
