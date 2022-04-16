import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isLoading = true;
  featuredProducts$ = this.homeService.getFeaturedProducts().pipe(tap(() => {
    this.isLoading = false;
  }));
  categories = ['kategoria1', 'kategoria2']
  constructor(private homeService: HomeService) { }
}
