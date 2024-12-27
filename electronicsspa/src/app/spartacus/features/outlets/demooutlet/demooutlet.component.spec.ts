import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemooutletComponent } from './demooutlet.component';

describe('DemooutletComponent', () => {
  let component: DemooutletComponent;
  let fixture: ComponentFixture<DemooutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemooutletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemooutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
