import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateQuantityControl } from 'src/app/products/shared/quantity-control';
import { environment } from 'src/environments/environment';
import { CartItem } from '../shared/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  BACKEND_URL = environment.BACKEND_URL;
  quantityControl = CreateQuantityControl();

  @Input() cartItem!: CartItem;
  @Output() delete = new EventEmitter<CartItem>();
  @Output() edit = new EventEmitter<CartItem>();

  onDelete() {
    this.delete.emit(this.cartItem);
  }
}
