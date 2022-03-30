import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

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
}
