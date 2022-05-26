import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from 'src/environments/environment';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeSliderComponent {
  BACKEND_URL = environment.BACKEND_URL;
  images = ['https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg', 'https://www.w3schools.com/css/img_lights.jpg']
  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
    autoplay: {
      delay: 3000,
    },
  };
}
