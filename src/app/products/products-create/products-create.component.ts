import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ProductsService } from '../shared/products.service';
import { IMAGE_EXTS } from './image-extenstions';

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
    image: [null, Validators.required],
  });
  imagePreview = '';
  categories = ['kategoria1', 'kategoria2'];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  onSubmit() {
    this.isLoading = true;

    const newProduct = this.productForm.value;
    const productData = new FormData();
    productData.append('name', newProduct.name);
    productData.append('price', newProduct.price);
    productData.append('featured', 'false');
    productData.append('image', newProduct.image, newProduct.name);
    productData.append('category', newProduct.category);

    this.productsService
      .postProduct(productData)
      .pipe(take(1))
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  onImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    const isCorrectType = !!(IMAGE_EXTS as any)[file.type];
    if (!isCorrectType) {
      this.productForm.get('image')!.setErrors({ invalidFileType: true });
      return;
    }
    this.productForm.patchValue({
      image: file,
    });
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
