import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomlinkComponent } from './customlink.component';

describe('CustomlinkComponent', () => {
  let component: CustomlinkComponent;
  let fixture: ComponentFixture<CustomlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomlinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
