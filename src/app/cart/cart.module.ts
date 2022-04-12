import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { MatCardModule } from '@angular/material/card';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CartComponent, CartItemComponent],
  imports: [CommonModule, CartRoutingModule, MatCardModule, MatButtonModule],
})
export class CartModule {}
