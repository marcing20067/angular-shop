import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  postProduct(product: Product) {
    return of({});
  }

  getProducts() {
    const response: Product[] = [
      {
        id: '1',
        name: 'Pralka',
        price: 200.0,
      },
      {
        id: '2',
        name: 'Suszarka do włosów',
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
      {
        id: '1',
        name: 'Pluszowy miś',
        price: 60.0,
      },
    ];

    return of(response);
  }

  getProduct(id: string) {
    const response: Product = {
      id: '1',
      name: 'Pralka',
      price: 200.0,
    };

    return of(response);
  }
}
