import { Component } from '@angular/core';
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

  page = 0;
  itemsPerPage = 2;
  length!: number;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts().subscribe();
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
      })
      .pipe(
        tap(({ length }) => {
          this.length = length;
        })
      );
  }
}
