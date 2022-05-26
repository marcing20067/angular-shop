import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { CartService } from 'src/app/cart/shared/cart.service';
import { Product } from 'src/app/shared/products/product.model';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../shared/products.service';
import { CreateQuantityControl } from '../shared/quantity-control';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  BACKEND_URL = environment.BACKEND_URL;
  quantityControl = CreateQuantityControl();
  isLoading = true;
  id = this.route.snapshot.params['id'];
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productsService
      .getProduct(this.id)
      .pipe(take(1))
      .subscribe((product) => {
        this.product = product;
        this.isLoading = false;
      });
  }

  onAdd(quantity: number) {
    this.cartService.addItem({
      ...this.product,
      quantity,
    });
  }
}
