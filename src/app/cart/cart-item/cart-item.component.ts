import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() delete = new EventEmitter<CartItem>();

  onDelete() {
    this.delete.emit(this.cartItem);
  }
}
