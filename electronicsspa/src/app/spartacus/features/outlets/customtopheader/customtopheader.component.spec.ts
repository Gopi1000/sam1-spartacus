import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomtopheaderComponent } from './customtopheader.component';

describe('CustomtopheaderComponent', () => {
  let component: CustomtopheaderComponent;
  let fixture: ComponentFixture<CustomtopheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomtopheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomtopheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
