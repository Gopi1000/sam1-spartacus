import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomcarouselComponent } from './customcarousel.component';

describe('CustomcarouselComponent', () => {
  let component: CustomcarouselComponent;
  let fixture: ComponentFixture<CustomcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomcarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
