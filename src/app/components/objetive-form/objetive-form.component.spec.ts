import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetiveFormComponent } from './objetive-form.component';

describe('ObjetiveFormComponent', () => {
  let component: ObjetiveFormComponent;
  let fixture: ComponentFixture<ObjetiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
