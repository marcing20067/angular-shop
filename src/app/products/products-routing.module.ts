import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsSearchComponent } from './products-search/products-search.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsSearchComponent,
  },
  {
    path: ':id',
    component: ProductsDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
