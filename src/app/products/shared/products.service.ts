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

  getProducts(
    paginatorObj?: { page: number; itemsPerPage: number },
    nameQuery?: string
  ) {
    let products = [...PRODUCTS];
    let length = PRODUCTS.length;
    console.log(nameQuery);
    if (nameQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(nameQuery.toLowerCase())
      );
      length = products.length;
      console.log('=====');
      console.log(products);
    }
    if (paginatorObj) {
      const { page, itemsPerPage } = paginatorObj;
      const start = page * itemsPerPage;
      const end = start + itemsPerPage;
      products = products.slice(start, end);
      if(!nameQuery) {
        length = PRODUCTS.length;
      }
    }
    console.log(PRODUCTS);
console.log(products);
    this.products$.next(products);
    return of({ length, products });
  }

  getProduct(id: string) {
    const findedProduct = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
    return of(findedProduct);
  }
}
