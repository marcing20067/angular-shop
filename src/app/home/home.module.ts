import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    SharedModule,
    SwiperModule
  ]
})
export class HomeModule { }
