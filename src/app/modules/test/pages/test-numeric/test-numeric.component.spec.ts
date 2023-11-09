import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNumericComponent } from './test-numeric.component';

describe('TestNumericComponent', () => {
  let component: TestNumericComponent;
  let fixture: ComponentFixture<TestNumericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNumericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNumericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
