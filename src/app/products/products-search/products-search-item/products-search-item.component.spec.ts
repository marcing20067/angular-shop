import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSearchItemComponent } from './products-search-item.component';

describe('ProductsSearchItemComponent', () => {
  let component: ProductsSearchItemComponent;
  let fixture: ComponentFixture<ProductsSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
