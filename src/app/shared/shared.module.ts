import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProductsComponent } from './products/products.component';
import { GetMessageErrorPipe } from './get-message-error/get-message-error.pipe';

@NgModule({
  declarations: [ProductsComponent, GetMessageErrorPipe],
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule],
  exports: [MatButtonModule, ProductsComponent, GetMessageErrorPipe],
})
export class SharedModule {}
