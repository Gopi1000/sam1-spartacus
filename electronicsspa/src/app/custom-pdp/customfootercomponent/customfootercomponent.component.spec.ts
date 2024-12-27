import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomfootercomponentComponent } from './customfootercomponent.component';

describe('CustomfootercomponentComponent', () => {
  let component: CustomfootercomponentComponent;
  let fixture: ComponentFixture<CustomfootercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomfootercomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomfootercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
