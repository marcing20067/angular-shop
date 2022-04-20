import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { PRODUCTS } from 'src/app/products/shared/products';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getFeaturedProducts() {
    const products = PRODUCTS.filter((p) => {
      return p.featured === true;
    })
    return of(products).pipe(delay(300));
  }
}
