import { Component, Input } from '@angular/core';
import { Product } from '../../shared/product.model';

@Component({
  selector: 'app-products-search-item',
  templateUrl: './products-search-item.component.html',
  styleUrls: ['./products-search-item.component.scss'],
})
export class ProductsSearchItemComponent {
  @Input() product!: Product;
}
