import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../shared/products/product.model';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  postProduct(product: Product) {
    return of({});
  }

  getProducts() {
    const response: Product[] = [...PRODUCTS];

    return of(response);
  }

  getProduct(id: string) {
    const findedProduct = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
    return of(findedProduct);
  }
}
