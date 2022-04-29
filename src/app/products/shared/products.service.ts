import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of } from 'rxjs';
import { Product } from '../../shared/products/product.model';
import { ProductSale } from './product-sale.model';
import { PRODUCTS } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products$ = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  postProduct(productData: FormData) {
    return this.http.post('http://localhost:3000/products', productData);
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
    if (nameQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(nameQuery.toLowerCase())
      );
      length = products.length;
    }
    if (paginatorObj) {
      const { page, itemsPerPage } = paginatorObj;
      const start = page * itemsPerPage;
      const end = start + itemsPerPage;
      products = products.slice(start, end);
      if (!nameQuery) {
        length = PRODUCTS.length;
      }
    }
    this.products$.next(products);
    return of({ length, products }).pipe(delay(300));
  }

  getProduct(id: string) {
    const findedProduct = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
    return of(findedProduct).pipe(delay(300));
  }

  getProductsSale() {
    const soldQuantity = [10, 20, 100, 73, 12];
    const response: ProductSale[] = PRODUCTS.map((p, i) => {
      return { ...p, soldQuantity: soldQuantity[i] };
    });
    return of(response).pipe(delay(300));
  }
}
