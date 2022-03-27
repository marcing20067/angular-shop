import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './layout/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [NavComponent, FooterComponent],
})
export class SharedModule {}
