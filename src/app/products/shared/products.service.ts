import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Product } from '../../shared/products/product.model';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  postProduct(product: Product) {
    return of({});
  }

  getProductsListener() {
    return this.products$.asObservable();
  }

  getProducts(paginatorObj?: { page: number; itemsPerPage: number }) {
    if (paginatorObj) {
      const { page, itemsPerPage } = paginatorObj;
      const length = PRODUCTS.length;
      const start = page * itemsPerPage;
      const end = start + itemsPerPage;
      const products = PRODUCTS.slice(start, end);
      this.products$.next(products);
      return of({ length, products })
    }
    const response = { length: PRODUCTS.length, products: [...PRODUCTS] };
    this.products$.next(response.products);
    return of(response);
  }

  getProduct(id: string) {
    const findedProduct = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
    return of(findedProduct);
  }
}
