import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  DEFAULT_CART: Cart = { items: [], quantity: 0 };
  private cart$ = new BehaviorSubject<Cart>(this.DEFAULT_CART);
  private cart: Cart = this.DEFAULT_CART;

  constructor() {
    this.init();
  }

  getCart() {
    return this.cart$.asObservable();
  }

  addItem(cartItem: CartItem) {
    const duplicateIndex = this.cart!.items.findIndex(
      (c) => c.id === cartItem.id
    );
    if (duplicateIndex === -1) {
      const updatedCart: Cart = {
        items: [...this.cart!.items, cartItem],
        quantity: this.cart!.quantity + cartItem.quantity,
      };
      this.updateCart(updatedCart);
      return;
    }
    const updatedCart = { ...this.cart };
    updatedCart.items[duplicateIndex].quantity += cartItem.quantity;
    updatedCart.quantity += cartItem.quantity;
    this.updateCart(updatedCart);
  }

  deleteItem(cartItem: CartItem) {
    const updatedCartItems = this.cart!.items.filter(
      (i) => i.id !== cartItem.id
    );
    const updatedCart: Cart = {
      items: updatedCartItems,
      quantity: this.cart!.quantity - cartItem.quantity,
    };
    this.updateCart(updatedCart);
  }

  private init() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.updateCart(JSON.parse(savedCart));
      return;
    }
  }

  private updateCart(cart: Cart) {
    this.cart$.next({ ...cart});
    this.cart = { ...cart};
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
