import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from 'src/app/products/shared/product.model';

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
      },
      {
        id: '2',
        name: 'Szczoteczka do zębów',
        price: 20.0,
      },
      {
        id: '3',
        name: 'Telefon',
        price: 950.0,
      },
      {
        id: '2',
        name: 'Szczoteczka do zębów',
        price: 20.0,
      },
    ];
    return of(products);
  }
}
