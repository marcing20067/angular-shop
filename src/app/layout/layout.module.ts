import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [NavComponent, FooterComponent]
})
export class LayoutModule { }
