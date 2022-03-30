import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent {
  id = this.route.snapshot.params['id'];
  product$ = this.productsService.getProduct(this.id);

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

}
