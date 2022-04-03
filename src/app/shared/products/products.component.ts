import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/products/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  @Input() products!: Product[];
}
