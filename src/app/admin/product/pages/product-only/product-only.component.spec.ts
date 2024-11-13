import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnlyComponent } from './product-only.component';

describe('ProductOnlyComponent', () => {
  let component: ProductOnlyComponent;
  let fixture: ComponentFixture<ProductOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOnlyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
