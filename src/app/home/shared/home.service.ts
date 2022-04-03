import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from 'src/app/shared/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getFeaturedProducts() {
    const products: Product[] = [
      {
        id: '3',
        name: 'Telefon',
        price: 950.0,
        imageUrl:
          'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      },
      {
        id: '2',
        name: 'Szczoteczka do zębów',
        price: 20.0,
        imageUrl:
          'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      },
      {
        id: '3',
        name: 'Telefon',
        price: 950.0,
        imageUrl:
          'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      },
      {
        id: '2',
        name: 'Szczoteczka do zębów',
        price: 20.0,
        imageUrl:
          'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
      },
    ];
    return of(products);
  }
}
