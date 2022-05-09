import { Component } from '@angular/core';
import { take } from 'rxjs';
import { CartItem } from './cart.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart$ = this.cartService.getCart();

  constructor(private cartService: CartService) {}

  onDelete(cartItem: CartItem) {
    this.cartService.deleteItem(cartItem);
  }

  onEdit(newCartItem: CartItem) {
    this.cartService.editItem(newCartItem);
  }

  onPay() {
    this.cartService.pay().pipe(take(1)).subscribe(({ url }) => {
      window.location.href = url;
    });
  }
}
