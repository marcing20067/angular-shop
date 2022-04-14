import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
})
export class ProductsSearchComponent {
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
    this.getProducts().subscribe();
  }

  onSubmit() {
    this.page = 0;
    this.savedText = this.searchForm.value.text;
    this.getProducts().subscribe()
  }

  setPage(e: PageEvent) {
    this.page = e.pageIndex;
    this.getProducts().subscribe();
  }

  private getProducts() {
    return this.productsService
      .getProducts({
        page: this.page,
        itemsPerPage: this.itemsPerPage,
      }, this.savedText)
      .pipe(
        tap(({ length }) => {
          this.length = length;
        })
      );
  }
}
