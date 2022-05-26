import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CartService } from 'src/app/cart/shared/cart.service';
import { TokenService } from 'src/app/shared/token/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  quantity$ = this.cartService.getCart().pipe(
    map((cart) => {
      if (!cart) {
        return 0;
      }

      return cart.quantity > 99 ? '99+' : cart.quantity;
    })
  );

  constructor(
    private cartService: CartService,
    private tokenService: TokenService
  ) {}
}
