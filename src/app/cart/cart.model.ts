import { Product } from 'src/app/shared/products/product.model';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  quantity: number;
}
