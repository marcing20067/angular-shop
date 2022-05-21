import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { take, tap } from 'rxjs/operators';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent {
  isLoading = true;
  products$ = this.productsService.getProductsListener();

  savedText = '';
  searchForm = this.fb.group({
    text: ['']
  })

  page = 0;
  itemsPerPage = 2;
  length!: number;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts().pipe(take(1)).subscribe();
  }

  onSubmit() {
    this.page = 0;
    this.savedText = this.searchForm.value.text;
    this.getProducts().pipe(take(1)).subscribe()
  }

  setPage(e: PageEvent) {
    this.page = e.pageIndex;
    this.getProducts().pipe(take(1)).subscribe();
  }

  private getProducts() {
    this.isLoading = true;
    return this.productsService
      .getProducts({
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      }, this.savedText)
      .pipe(
        tap(({ length }) => {
          this.length = length;
          this.isLoading = false;
        })
      );
  }
}
