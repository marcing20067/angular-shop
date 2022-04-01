import { Component } from '@angular/core';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredProducts$ = this.homeService.getFeaturedProducts();
  categories = ['kategoria1', 'kategoria2']
  constructor(private homeService: HomeService) { }
}
