import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    return this.http.post(environment.BACKEND_URL + 'products', productData);
  }

  getProductsListener() {
    return this.products$.asObservable();
  }

  getProducts(
    paginatorObj?: { page: number; itemsPerPage: number },
    nameQuery?: string
  ) {
    return this.http
      .get<{ length: number; products: Product[] }>(
        environment.BACKEND_URL + 'products',
        {
          params: {
            name: nameQuery || '',
            page: paginatorObj?.page || 0,
            itemsPerPage: paginatorObj?.itemsPerPage || 0,
          },
        }
      )
      .pipe(
        tap(({ products }) => {
          this.products$.next(products);
        })
      );
  }

  getProduct(id: string) {
    return this.http.get<Product>(environment.BACKEND_URL + 'products/' + id);
  }

  getProductsSale() {
    const soldQuantity = [10, 20, 100, 73, 12];
    const response: ProductSale[] = PRODUCTS.map((p, i) => {
      return { ...p, soldQuantity: soldQuantity[i] };
    });
    return of(response).pipe(delay(300));
  }
}
