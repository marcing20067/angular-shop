import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/shared/products/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getFeaturedProducts() {
    return this.http
      .get<{ length: number; products: Product[] }>(
        environment.BACKEND_URL + 'products',
        {
          params: {
            featured: 'true',
          },
        }
      )
      .pipe(
        map(({ products }) => {
          return products;
        })
      );
  }
}
