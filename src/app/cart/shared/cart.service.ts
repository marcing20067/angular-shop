import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart, CartItem } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  DEFAULT_CART: Cart = { items: [], quantity: 0, price: 0 };
  private cart$ = new BehaviorSubject<Cart>(this.DEFAULT_CART);
  private cart: Cart = this.DEFAULT_CART;

  constructor(private http: HttpClient) {
    this.init();
  }

  getCart() {
    return this.cart$.asObservable();
  }

  addItem(cartItem: CartItem) {
    const duplicateIndex = this.cart.items.findIndex(
      (c) => c._id === cartItem._id
    );
    if (duplicateIndex === -1) {
      const updatedCart: Cart = {
        items: [...this.cart.items, cartItem],
        quantity: this.cart.quantity + cartItem.quantity,
        price: this.cart.price + cartItem.price * cartItem.quantity,
      };
      this.updateCart(updatedCart);
      return;
    }
    const updatedCart = { ...this.cart };
    updatedCart.items[duplicateIndex].quantity += cartItem.quantity;
    updatedCart.quantity += cartItem.quantity;
    updatedCart.price += cartItem.price * cartItem.quantity;
    this.updateCart(updatedCart);
  }

  deleteItem(cartItem: CartItem) {
    const updatedCartItems = this.cart.items.filter(
      (i) => i._id !== cartItem._id
    );
    const updatedCart: Cart = {
      items: updatedCartItems,
      quantity: this.cart.quantity - cartItem.quantity,
      price: this.cart.price - cartItem.price * cartItem.quantity,
    };
    this.updateCart(updatedCart);
  }

  editItem(newItem: CartItem) {
    const oldItemIndex = this.cart.items.findIndex(
      (i) => i._id === newItem._id
    );
    const oldCartItem = this.cart.items[oldItemIndex];
    const updatedItems = [...this.cart.items];

    updatedItems.splice(oldItemIndex, oldItemIndex + 1, newItem);
    const updatedCart: Cart = {
      items: updatedItems,
      quantity: this.cart.quantity - oldCartItem.quantity + newItem.quantity,
      price:
        this.cart.price -
        oldCartItem.price * oldCartItem.quantity +
        newItem.price * newItem.quantity,
    };
    this.updateCart(updatedCart);
  }

  pay(cart?: Cart) {
    return this.http
      .post<{ url: string }>(environment.BACKEND_URL + 'account/pay', {
        cart: cart || this.cart,
      })
      .pipe(
        tap(({ url }) => {
          window.location.href = url;
        })
      );
  }

  private init() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.updateCart(JSON.parse(savedCart));
      return;
    }
  }

  private updateCart(cart: Cart) {
    this.cart$.next({ ...cart });
    this.cart = { ...cart };
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
