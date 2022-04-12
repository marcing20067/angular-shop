import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  quantity$ = this.cartService.getCart().pipe(
    map((cart) => {
      return cart ? cart.quantity : 0
    })
  );
  
  constructor(private cartService: CartService) {}
}
