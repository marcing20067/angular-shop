import { Component } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-sale',
  templateUrl: './products-sale.component.html',
  styleUrls: ['./products-sale.component.scss']
})
export class ProductsSaleComponent {
  productsSale$ = this.productsService.getProductsSale();
  constructor(private productsService: ProductsService) { }
}
