import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../../shared/products/product.model';

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
}
