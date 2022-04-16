import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss'],
})
export class ProductsCreateComponent {
  isLoading = false;
  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    category: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(1)]],
  });
  categories = ['kategoria1', 'kategoria2'];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  onSubmit() {
    this.isLoading = true;
    const newProduct = this.productForm.value;
    this.productsService.postProduct(newProduct).pipe(take(1)).subscribe(() => {
      this.isLoading = false;
    });
  }
}
