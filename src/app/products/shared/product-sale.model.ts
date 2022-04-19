import { Product } from 'src/app/shared/products/product.model';

export interface ProductSale extends Product {
  soldQuantity: number;
}
