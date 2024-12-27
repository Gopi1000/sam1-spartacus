import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomproductdetailsComponent } from './customproductdetails.component';

describe('CustomproductdetailsComponent', () => {
  let component: CustomproductdetailsComponent;
  let fixture: ComponentFixture<CustomproductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomproductdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomproductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
