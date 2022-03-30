import { Component } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent {
  products$ = this.productsService.getProducts();
  constructor(private productsService: ProductsService) {}
}
