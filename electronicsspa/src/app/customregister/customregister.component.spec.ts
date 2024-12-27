import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomregisterComponent } from './customregister.component';

describe('CustomregisterComponent', () => {
  let component: CustomregisterComponent;
  let fixture: ComponentFixture<CustomregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
