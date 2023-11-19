import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNumericNewComponent } from './test-numeric-new.component';

describe('TestNumericNewComponent', () => {
  let component: TestNumericNewComponent;
  let fixture: ComponentFixture<TestNumericNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNumericNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNumericNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
