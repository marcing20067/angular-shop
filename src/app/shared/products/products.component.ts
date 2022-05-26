import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/products/product.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  BACKEND_URL = environment.BACKEND_URL;
  @Input() products!: Product[];
}
