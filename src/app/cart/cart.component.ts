import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CartItem } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems$ = this.cartService.getCart().pipe(
    map((cart) => {
      return cart?.items;
    })
  );

  constructor(private cartService: CartService) {}

  onDelete(cartItem: CartItem) {
    this.cartService.deleteItem(cartItem);
  }
}
