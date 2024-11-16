import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetiveCardComponent } from './objetive-card.component';

describe('ObjetiveCardComponent', () => {
  let component: ObjetiveCardComponent;
  let fixture: ComponentFixture<ObjetiveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetiveCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
